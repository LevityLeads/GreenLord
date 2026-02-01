import { cn } from '@/lib/utils';
import { ImageIcon, Camera } from 'lucide-react';

export interface ImagePlaceholderProps {
  /** Alt text for the image (accessibility description) */
  alt: string;
  /** Detailed description of what the image should contain */
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
 * Displays a grey box with dashed border, the alt text, detailed instructions
 * for what the image should contain, and recommended dimensions.
 *
 * @example
 * ```tsx
 * <ImagePlaceholder
 *   alt="Victorian terrace house with external wall insulation"
 *   description="Photo showing the exterior of a typical Victorian terrace property that has been upgraded with external wall insulation. Should show the smooth rendered finish over the insulation."
 *   width={800}
 *   height={450}
 *   instructions={[
 *     'Show a real UK property, preferably in London or similar urban area',
 *     'Capture both the original brickwork (if visible next door) and the insulated section',
 *     'Daylight conditions, front-facing angle',
 *     'Ensure no visible house numbers or identifiable personal information'
 *   ]}
 *   priority
 * />
 * ```
 */
export function ImagePlaceholder({
  alt,
  description,
  width,
  height,
  instructions,
  priority = false,
  className,
}: ImagePlaceholderProps) {
  const aspectRatio = width / height;

  return (
    <figure
      className={cn(
        'my-6 rounded-lg border-2 border-dashed bg-neutral-100 overflow-hidden',
        priority ? 'border-primary-400' : 'border-neutral-300',
        className
      )}
      role="img"
      aria-label={alt}
    >
      <div
        className="relative flex flex-col items-center justify-center p-6 sm:p-8 text-center"
        style={{
          aspectRatio: aspectRatio.toString(),
          maxHeight: '500px',
        }}
      >
        {/* Icon */}
        <div
          className={cn(
            'mb-4 p-3 rounded-full',
            priority ? 'bg-primary-100' : 'bg-neutral-200'
          )}
        >
          {priority ? (
            <Camera
              className="h-8 w-8 text-primary-600"
              aria-hidden="true"
            />
          ) : (
            <ImageIcon
              className="h-8 w-8 text-neutral-500"
              aria-hidden="true"
            />
          )}
        </div>

        {/* Alt text label */}
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-neutral-200 text-neutral-600 rounded uppercase tracking-wide">
            Alt Text
          </span>
        </div>
        <p className="text-sm font-semibold text-neutral-800 mb-4 max-w-md">
          {alt}
        </p>

        {/* Description */}
        <div className="mb-4 max-w-lg">
          <span className="block text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1">
            Image Description
          </span>
          <p className="text-sm text-neutral-600">{description}</p>
        </div>

        {/* Dimensions */}
        <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
          <span className="flex items-center gap-1">
            <span className="font-medium">Recommended:</span>
            {width} x {height}px
          </span>
          <span className="flex items-center gap-1">
            <span className="font-medium">Ratio:</span>
            {aspectRatio.toFixed(2)}:1
          </span>
        </div>

        {/* Priority badge */}
        {priority && (
          <span className="inline-block px-2 py-1 text-xs font-medium bg-primary-600 text-white rounded mb-4">
            Priority Image
          </span>
        )}
      </div>

      {/* Instructions section */}
      {instructions && instructions.length > 0 && (
        <div className="border-t-2 border-dashed border-neutral-300 bg-white p-4 sm:p-6">
          <h4 className="text-xs font-semibold text-neutral-700 uppercase tracking-wide mb-2">
            Instructions for Designer/Photographer
          </h4>
          <ul className="space-y-1">
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
          </ul>
        </div>
      )}
    </figure>
  );
}

export default ImagePlaceholder;
