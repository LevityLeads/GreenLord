'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ImageIcon, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';

export interface ImagePlaceholderProps {
  /** Unique identifier for this image */
  id?: string;
  /** Alt text for the image (accessibility description) */
  alt: string;
  /** Detailed description/prompt for image generation */
  description: string;
  /** Recommended width in pixels */
  width: number;
  /** Recommended height in pixels */
  height: number;
  /** Optional additional instructions for the designer/photographer */
  instructions?: string[];
  /** Whether this is a priority image */
  priority?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ImagePlaceholder - Placeholder component for images during development.
 * Features a "Generate Image" button and collapsible prompt details.
 */
export function ImagePlaceholder({
  id,
  alt,
  description,
  width,
  height,
  instructions,
  priority = false,
  className,
}: ImagePlaceholderProps) {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const aspectRatio = width / height;

  const handleGenerate = async () => {
    setIsGenerating(true);
    // TODO: Implement actual image generation API call
    console.log('Generating image with prompt:', { id, alt, description, instructions });

    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      alert('Image generation not yet implemented. Prompt logged to console.');
    }, 1000);
  };

  return (
    <figure
      className={cn(
        'my-6 rounded-lg border-2 border-dashed bg-neutral-100 overflow-hidden',
        priority ? 'border-primary-400' : 'border-primary-300',
        className
      )}
      role="img"
      aria-label={alt}
    >
      {/* Main content area */}
      <div
        className="relative flex flex-col items-center justify-center p-8 sm:p-12 text-center"
        style={{
          aspectRatio: aspectRatio.toString(),
          maxHeight: '500px',
        }}
      >
        {/* Icon */}
        <div className="mb-6 p-4 rounded-full bg-primary-100">
          <ImageIcon
            className="h-10 w-10 text-primary-400"
            aria-hidden="true"
          />
        </div>

        {/* Alt text as title */}
        <h3 className="text-lg font-semibold text-neutral-800 mb-2 max-w-lg">
          {alt}
        </h3>

        {/* Dimensions */}
        <p className="text-sm text-neutral-500 mb-6">
          {width} x {height}px
        </p>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className={cn(
            'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition-colors',
            isGenerating
              ? 'bg-primary-400 cursor-not-allowed'
              : 'bg-primary-800 hover:bg-primary-900'
          )}
        >
          <RefreshCw
            className={cn('h-5 w-5', isGenerating && 'animate-spin')}
          />
          {isGenerating ? 'Generating...' : 'Generate Image'}
        </button>
      </div>

      {/* Footer with ID and Show Prompt toggle */}
      <div className="flex items-center justify-between px-4 py-3 border-t-2 border-dashed border-primary-200 bg-white">
        {/* Image ID */}
        <span className="text-sm text-neutral-500">
          {id ? `Image ID: ${id}` : 'No ID assigned'}
        </span>

        {/* Show Prompt toggle */}
        <button
          onClick={() => setShowPrompt(!showPrompt)}
          className="inline-flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-800 transition-colors"
        >
          {showPrompt ? (
            <>
              <ChevronUp className="h-4 w-4" />
              Hide Prompt
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              Show Prompt
            </>
          )}
        </button>
      </div>

      {/* Collapsible Prompt Section */}
      {showPrompt && (
        <div className="border-t border-neutral-200 bg-white p-4 sm:p-6">
          {/* Description */}
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-neutral-700 uppercase tracking-wide mb-2">
              Image Description
            </h4>
            <p className="text-sm text-neutral-600">{description}</p>
          </div>

          {/* Instructions */}
          {instructions && instructions.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-neutral-700 uppercase tracking-wide mb-2">
                Instructions for Designer/Photographer
              </h4>
              <ol className="space-y-1">
                {instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="text-sm text-neutral-600 flex items-start gap-2"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-neutral-100 text-neutral-500 text-xs flex items-center justify-center mt-0.5">
                      {index + 1}
                    </span>
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Dimensions info */}
          <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center gap-4 text-xs text-neutral-500">
            <span>
              <span className="font-medium">Recommended:</span> {width} x {height}px
            </span>
            <span>
              <span className="font-medium">Ratio:</span> {aspectRatio.toFixed(2)}:1
            </span>
            {priority && (
              <span className="px-2 py-0.5 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                Priority
              </span>
            )}
          </div>
        </div>
      )}
    </figure>
  );
}

export default ImagePlaceholder;
