'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { RefreshCw, Loader2, AlertCircle, ImageIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import type { GenerateImageRequest, GenerateImageResponse } from '@/app/api/generate-image/route';
import type { CheckImageStatusResponse } from '@/app/api/check-image-status/route';

export interface GeneratedImageProps {
  /** Unique identifier for this image placement */
  imageId: string;
  /** Alt text for the image (accessibility description) */
  alt: string;
  /** Detailed description of what the image should contain */
  description: string;
  /** Recommended width in pixels */
  width: number;
  /** Recommended height in pixels */
  height: number;
  /** Optional additional instructions for the AI */
  instructions?: string[];
  /** Whether this is a priority image */
  priority?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Pre-existing image URL (if already generated) */
  existingImageUrl?: string;
  /** Show regenerate controls (for development) */
  showControls?: boolean;
}

type ImageState = 'placeholder' | 'generating' | 'loaded' | 'error';

const POLL_INTERVAL_MS = 3000; // Poll every 3 seconds
const MAX_POLL_TIME_MS = 180000; // Max 3 minutes

/**
 * GeneratedImage - Component that displays AI-generated images with regeneration capability.
 * Falls back to a placeholder if no image exists.
 * Includes a regenerate button for development/content creation workflow.
 */
export function GeneratedImage({
  imageId,
  alt,
  description,
  width,
  height,
  instructions,
  priority = false,
  className,
  existingImageUrl,
  showControls = true, // Show regenerate button by default (remove for production)
}: GeneratedImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(existingImageUrl || null);
  const [state, setState] = useState<ImageState>(existingImageUrl ? 'loaded' : 'placeholder');
  const [error, setError] = useState<string | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string>('Creating task...');
  const pollRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  const aspectRatio = width / height;

  // Cleanup polling on unmount
  useEffect(() => {
    return () => {
      if (pollRef.current) {
        clearTimeout(pollRef.current);
      }
    };
  }, []);

  // Load image from localStorage on mount (for persistence during dev)
  useEffect(() => {
    if (!existingImageUrl && typeof window !== 'undefined') {
      const stored = localStorage.getItem(`generated-image-${imageId}`);
      if (stored) {
        setImageUrl(stored);
        setState('loaded');
      }
    }
  }, [imageId, existingImageUrl]);

  const pollForCompletion = useCallback(async (taskId: string) => {
    // Check if we've exceeded max poll time
    if (Date.now() - startTimeRef.current > MAX_POLL_TIME_MS) {
      setError('Timeout waiting for image generation');
      setState('error');
      return;
    }

    try {
      const response = await fetch(`/api/check-image-status?taskId=${encodeURIComponent(taskId)}`);
      const data: CheckImageStatusResponse = await response.json();

      // Debug logging - check browser console
      console.log('Poll response:', data);

      if (data.status === 'completed' && data.imageUrl) {
        // Success!
        setImageUrl(data.imageUrl);
        setState('loaded');
        // Store in localStorage for persistence
        if (typeof window !== 'undefined') {
          localStorage.setItem(`generated-image-${imageId}`, data.imageUrl);
        }
        return;
      }

      if (data.status === 'failed') {
        setError(data.error || 'Image generation failed');
        setState('error');
        return;
      }

      // Still processing - update status and poll again
      const elapsed = Math.round((Date.now() - startTimeRef.current) / 1000);
      setStatusMessage(`Generating... (${elapsed}s)`);

      pollRef.current = setTimeout(() => pollForCompletion(taskId), POLL_INTERVAL_MS);
    } catch (err) {
      console.error('Polling error:', err);
      // Retry on network errors
      pollRef.current = setTimeout(() => pollForCompletion(taskId), POLL_INTERVAL_MS);
    }
  }, [imageId]);

  const generateImage = useCallback(async () => {
    setState('generating');
    setError(null);
    setStatusMessage('Creating task...');
    startTimeRef.current = Date.now();

    // Clear any existing poll
    if (pollRef.current) {
      clearTimeout(pollRef.current);
    }

    try {
      const requestBody: GenerateImageRequest = {
        imageId,
        alt,
        description,
        width,
        height,
        instructions,
      };

      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data: GenerateImageResponse = await response.json();

      if (data.success && data.taskId) {
        // Task created - start polling for completion
        setStatusMessage('Processing...');
        pollForCompletion(data.taskId);
      } else {
        setError(data.error || 'Failed to create image task');
        setState('error');
      }
    } catch (err) {
      console.error('Image generation error:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
      setState('error');
    }
  }, [imageId, alt, description, width, height, instructions, pollForCompletion]);

  const clearImage = useCallback(() => {
    setImageUrl(null);
    setState('placeholder');
    setError(null);
    if (pollRef.current) {
      clearTimeout(pollRef.current);
    }
    if (typeof window !== 'undefined') {
      localStorage.removeItem(`generated-image-${imageId}`);
    }
  }, [imageId]);

  // Build the full prompt for display
  const fullPrompt = [
    'Professional architectural photograph of UK property.',
    description,
    ...(instructions || []),
    'High quality, professional real estate photography, natural daylight, sharp focus.',
    'British architecture, UK property style.',
  ].join(' ');

  return (
    <figure
      className={cn(
        'my-6 rounded-lg overflow-hidden relative group',
        state === 'placeholder' && 'border-2 border-dashed bg-neutral-100',
        state === 'placeholder' && priority ? 'border-primary-400' : 'border-neutral-300',
        className
      )}
    >
      <div
        className="relative"
        style={{
          aspectRatio: aspectRatio.toString(),
          maxHeight: '500px',
        }}
      >
        {/* Loaded State - Show Image */}
        {/* Using regular img tag to avoid Next.js Image domain restrictions */}
        {state === 'loaded' && imageUrl && (
          <img
            src={imageUrl}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover"
            loading={priority ? 'eager' : 'lazy'}
          />
        )}

        {/* Generating State */}
        {state === 'generating' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary-50">
            <Loader2 className="h-12 w-12 text-primary-600 animate-spin mb-4" />
            <p className="text-primary-700 font-medium">{statusMessage}</p>
            <p className="text-sm text-primary-600 mt-1">This may take up to 2 minutes</p>
          </div>
        )}

        {/* Error State */}
        {state === 'error' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-50 p-6">
            <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
            <p className="text-red-700 font-medium mb-2">Generation Failed</p>
            <p className="text-sm text-red-600 text-center max-w-md mb-4">{error}</p>
            <Button variant="outline" size="sm" onClick={generateImage}>
              Try Again
            </Button>
          </div>
        )}

        {/* Placeholder State */}
        {state === 'placeholder' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div
              className={cn(
                'mb-4 p-3 rounded-full',
                priority ? 'bg-primary-100' : 'bg-neutral-200'
              )}
            >
              <ImageIcon
                className={cn('h-8 w-8', priority ? 'text-primary-600' : 'text-neutral-500')}
                aria-hidden="true"
              />
            </div>

            <p className="text-sm font-semibold text-neutral-800 mb-2 max-w-md">{alt}</p>
            <p className="text-xs text-neutral-500 mb-4">
              {width} x {height}px
            </p>

            {showControls && (
              <Button
                variant="primary"
                size="sm"
                onClick={generateImage}
                leftIcon={<RefreshCw className="h-4 w-4" />}
              >
                Generate Image
              </Button>
            )}
          </div>
        )}

        {/* Controls Overlay (visible on hover when image is loaded) */}
        {showControls && state === 'loaded' && (
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={generateImage}
              leftIcon={<RefreshCw className="h-4 w-4" />}
            >
              Regenerate
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearImage}
              className="text-white hover:text-white hover:bg-white/20"
              leftIcon={<X className="h-4 w-4" />}
            >
              Clear
            </Button>
          </div>
        )}
      </div>

      {/* Prompt Display Toggle (for debugging) */}
      {showControls && (
        <div className="border-t border-neutral-200 bg-white">
          <button
            type="button"
            onClick={() => setShowPrompt(!showPrompt)}
            className="w-full px-4 py-2 text-left text-xs text-neutral-500 hover:bg-neutral-50 flex items-center justify-between"
          >
            <span>Image ID: {imageId}</span>
            <span>{showPrompt ? '▲ Hide Prompt' : '▼ Show Prompt'}</span>
          </button>

          {showPrompt && (
            <div className="px-4 py-3 bg-neutral-50 border-t border-neutral-200">
              <p className="text-xs text-neutral-600 font-mono whitespace-pre-wrap">{fullPrompt}</p>
            </div>
          )}
        </div>
      )}
    </figure>
  );
}

export default GeneratedImage;
