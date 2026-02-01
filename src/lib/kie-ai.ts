// Kie.ai API Client for Nano Banana Pro image generation
// Documentation: https://docs.kie.ai/market/google/nano-banana

export interface KieImageGenerationRequest {
  prompt: string;
  aspectRatio?: '1:1' | '16:9' | '9:16' | '4:3' | '3:4' | '3:2' | '2:3' | '4:5' | '5:4' | '21:9' | 'auto';
  resolution?: '1K' | '2K' | '4K';
  outputFormat?: 'png' | 'jpg';
}

export interface KieTaskResponse {
  code: number;
  message: string;
  data: {
    taskId: string;
  };
}

export interface KieTaskStatusResponse {
  code: number;
  message: string;
  data: {
    taskId: string;
    model?: string;
    state?: 'pending' | 'processing' | 'success' | 'failed'; // Playground endpoint uses 'state'
    status?: 'pending' | 'processing' | 'completed' | 'failed'; // Jobs endpoint uses 'status'
    successFlag?: 0 | 1 | 2 | 3; // 0 = processing, 1 = success, 2/3 = failed
    progress?: number;
    response?: {
      resultUrls?: string[];
    };
    resultUrls?: string[]; // Playground endpoint may have this at top level
    resultJson?: string; // Stringified JSON with resultUrls
    errorCode?: string;
    errorMessage?: string;
    createTime?: string;
    completeTime?: string;
  };
}

export interface GeneratedImageResult {
  success: boolean;
  imageUrl?: string;
  error?: string;
  taskId?: string;
}

const KIE_API_BASE = 'https://api.kie.ai/api/v1';

/**
 * Create an image generation task with Kie.ai Nano Banana Pro
 */
export async function createImageTask(
  apiKey: string,
  request: KieImageGenerationRequest
): Promise<{ taskId: string } | { error: string }> {
  try {
    const response = await fetch(`${KIE_API_BASE}/jobs/createTask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'nano-banana-pro',
        input: {
          prompt: request.prompt,
          aspect_ratio: request.aspectRatio || '16:9',
          resolution: request.resolution || '2K',
          output_format: request.outputFormat || 'png',
        },
      }),
    });

    const responseText = await response.text();

    if (!response.ok) {
      console.error('Kie.ai API error:', response.status, responseText);
      return { error: `API request failed: ${response.status} - ${responseText}` };
    }

    let data: KieTaskResponse;
    try {
      data = JSON.parse(responseText);
    } catch {
      console.error('Failed to parse Kie.ai response:', responseText);
      return { error: 'Invalid JSON response from API' };
    }

    if (data.code !== 200 && data.code !== 0) {
      console.error('Kie.ai task creation failed:', data);
      return { error: data.message || 'Failed to create task' };
    }

    if (!data.data?.taskId) {
      console.error('No taskId in response:', data);
      return { error: 'No taskId returned from API' };
    }

    return { taskId: data.data.taskId };
  } catch (error) {
    console.error('Kie.ai API error:', error);
    return { error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

/**
 * Check the status of an image generation task
 * Note: Nano Banana uses /playground/recordInfo endpoint, not /jobs/recordInfo
 */
export async function getTaskStatus(
  apiKey: string,
  taskId: string
): Promise<KieTaskStatusResponse['data'] | { error: string }> {
  try {
    // Nano Banana Pro uses the playground endpoint for status checks
    const response = await fetch(
      `${KIE_API_BASE}/playground/recordInfo?taskId=${encodeURIComponent(taskId)}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Kie.ai status check error:', response.status, errorText);
      return { error: `Status check failed: ${response.status}` };
    }

    const rawText = await response.text();
    console.log('Raw Kie.ai response:', rawText);

    let data: KieTaskStatusResponse;
    try {
      data = JSON.parse(rawText);
    } catch {
      return { error: 'Invalid JSON response: ' + rawText.substring(0, 200) };
    }

    if (data.code !== 200 && data.code !== 0) {
      return { error: data.message || 'Failed to get task status' };
    }

    return data.data;
  } catch (error) {
    console.error('Kie.ai status check error:', error);
    return { error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

/**
 * Poll for task completion with timeout
 */
export async function waitForTaskCompletion(
  apiKey: string,
  taskId: string,
  maxWaitMs: number = 120000, // 2 minutes default
  pollIntervalMs: number = 2000 // 2 seconds between polls
): Promise<GeneratedImageResult> {
  const startTime = Date.now();

  while (Date.now() - startTime < maxWaitMs) {
    const status = await getTaskStatus(apiKey, taskId);

    if ('error' in status) {
      return { success: false, error: status.error, taskId };
    }

    // Check if completed
    if (status.successFlag === 1) {
      // Try to get URL from response.resultUrls first
      let imageUrl = status.response?.resultUrls?.[0];

      // Fall back to parsing resultJson
      if (!imageUrl && status.resultJson) {
        try {
          const parsed = JSON.parse(status.resultJson);
          imageUrl = parsed.resultUrls?.[0];
        } catch {
          // Ignore parse errors
        }
      }

      if (imageUrl) {
        return { success: true, imageUrl, taskId };
      } else {
        return { success: false, error: 'No image URL in response', taskId };
      }
    }

    // Check if failed (successFlag 2 or 3 means failure)
    if (status.successFlag === 2 || status.successFlag === 3) {
      return {
        success: false,
        error: status.errorMessage || 'Image generation failed',
        taskId,
      };
    }

    // Still processing - wait before next poll
    await new Promise((resolve) => setTimeout(resolve, pollIntervalMs));
  }

  return { success: false, error: 'Timeout waiting for image generation', taskId };
}

/**
 * Generate an image and wait for completion (convenience function)
 */
export async function generateImage(
  apiKey: string,
  request: KieImageGenerationRequest
): Promise<GeneratedImageResult> {
  const taskResult = await createImageTask(apiKey, request);

  if ('error' in taskResult) {
    return { success: false, error: taskResult.error };
  }

  return waitForTaskCompletion(apiKey, taskResult.taskId);
}

/**
 * Build a photorealistic prompt for UK property/landlord images
 * Uses photography terminology for realistic results (lens, lighting, composition)
 */
export function buildPropertyImagePrompt(
  alt: string,
  description: string,
  instructions?: string[]
): string {
  // Build a narrative description, not keyword lists
  // Formula: [Subject] + [Setting] + [Lighting] + [Technical Details]

  const narrativeParts: string[] = [];

  // Core scene description
  narrativeParts.push(description);

  // Add any specific instructions as natural language
  if (instructions && instructions.length > 0) {
    narrativeParts.push(instructions.join('. ') + '.');
  }

  // Photography style - be specific about camera and technique
  const technicalDetails = [
    'Shot on a Canon EOS R5 with a 35mm f/1.8 lens',
    'shallow depth of field with creamy bokeh in the background',
    'soft natural window light creating gentle shadows',
    'the scene feels authentic and lived-in, not staged',
    'subtle film grain for a documentary photography aesthetic',
    'colors are natural and true-to-life, slightly desaturated',
    'composition follows the rule of thirds',
  ].join(', ') + '.';

  // Realism markers - avoid AI artifacts
  const realismNotes = 'The image should look like an editorial photograph from a UK property magazine, capturing a genuine moment. Avoid anything that looks artificial, overly polished, or computer-generated. Show natural imperfections like slight wrinkles in fabric, realistic skin texture, and authentic wear on objects.';

  // UK-specific context
  const ukContext = 'British setting with authentic UK architectural details, furniture styles, and atmosphere typical of England.';

  // Combine into flowing narrative
  return [
    narrativeParts.join(' '),
    technicalDetails,
    realismNotes,
    ukContext,
  ].join(' ');
}

/**
 * Build a prompt for UK property exterior photographs
 * Optimized for architectural/real estate photography style
 */
export function buildPropertyExteriorPrompt(
  propertyType: string,
  description: string,
  instructions?: string[]
): string {
  const narrativeParts: string[] = [];

  narrativeParts.push(`A professional real estate photograph of a ${propertyType} in England.`);
  narrativeParts.push(description);

  if (instructions && instructions.length > 0) {
    narrativeParts.push(instructions.join('. ') + '.');
  }

  const technicalDetails = [
    'Shot on a Sony A7R IV with a 24mm wide-angle lens at f/8 for maximum sharpness',
    'captured during the golden hour with warm, flattering light',
    'slight wide-angle perspective to show the full property',
    'sky has natural British clouds, not artificially blue',
    'front garden and street context visible',
  ].join(', ') + '.';

  const realismNotes = 'This should look like a professional estate agent photograph. The property should look well-maintained but realistically lived-in. Show authentic British architectural details like sash windows, chimney pots, brick patterns, and slate or tile roofing. Avoid anything that looks computer-generated or too perfect.';

  return [narrativeParts.join(' '), technicalDetails, realismNotes].join(' ');
}

/**
 * Build a prompt for UK property interior photographs
 */
export function buildPropertyInteriorPrompt(
  roomType: string,
  description: string,
  instructions?: string[]
): string {
  const narrativeParts: string[] = [];

  narrativeParts.push(`An interior photograph of a ${roomType} in a British home.`);
  narrativeParts.push(description);

  if (instructions && instructions.length > 0) {
    narrativeParts.push(instructions.join('. ') + '.');
  }

  const technicalDetails = [
    'Shot on a Canon EOS R5 with a 16-35mm lens at f/5.6',
    'natural daylight streaming through windows mixed with ambient room lighting',
    'composition shows the room\'s best features while feeling inviting',
    'colors are warm and natural, typical of UK interiors',
  ].join(', ') + '.';

  const realismNotes = 'The room should feel authentic and homely, not like a show home. Include realistic details like slightly rumpled cushions, a book left open, or a mug on a side table. British interior style with radiators, UK plug sockets, and typical furniture from UK stores.';

  return [narrativeParts.join(' '), technicalDetails, realismNotes].join(' ');
}

/**
 * Build a prompt for clean infographic/diagram style images
 * Best for process flows, comparisons, and educational content
 */
export function buildInfographicPrompt(
  topic: string,
  description: string,
  style: 'process' | 'comparison' | 'timeline' | 'icons' | 'diagram' = 'diagram'
): string {
  const styleGuides: Record<string, string> = {
    process: 'A clean step-by-step process infographic flowing from top to bottom or left to right, with numbered steps connected by subtle arrows.',
    comparison: 'A side-by-side comparison infographic with two columns showing differences clearly, using icons and short labels.',
    timeline: 'A horizontal or vertical timeline infographic with milestone markers and brief descriptions at each point.',
    icons: 'A set of clean, modern flat icons arranged in a grid, each representing a different concept with minimal detail.',
    diagram: 'A clear explanatory diagram with labeled components, using lines and arrows to show relationships.',
  };

  const baseStyle = styleGuides[style];

  return [
    baseStyle,
    `Topic: ${topic}.`,
    description,
    'Style: Clean, modern, professional infographic design.',
    'Use a cohesive color palette with navy blue (#1e3a5f) as the primary color and amber/orange (#f59e0b) as the accent.',
    'White or very light grey background for maximum readability.',
    'Sans-serif typography, clear hierarchy.',
    'Minimalist icons and simple geometric shapes.',
    'Avoid clutter - use whitespace effectively.',
    'Any text should be large, bold, and highly legible.',
    'This should look like it belongs in a professional government or business publication.',
  ].join(' ');
}

/**
 * Build a prompt for conceptual/abstract imagery
 * Good for hero sections and decorative backgrounds
 */
export function buildConceptualPrompt(
  concept: string,
  mood: string,
  description: string
): string {
  return [
    `A conceptual photograph representing "${concept}".`,
    description,
    `The overall mood should be ${mood}.`,
    'Shot with artistic intent, using depth of field and lighting to create visual interest.',
    'Colors should be sophisticated and muted, with a professional editorial feel.',
    'Abstract enough to work as a background but with enough detail to be interesting.',
    'Subtle film grain and natural color grading.',
    'Should feel premium and trustworthy, appropriate for a professional services website.',
  ].join(' ');
}

/**
 * Calculate aspect ratio from dimensions
 */
export function getAspectRatioFromDimensions(
  width: number,
  height: number
): '1:1' | '16:9' | '9:16' | '4:3' | '3:4' | '3:2' | '2:3' {
  const ratio = width / height;

  if (ratio > 2.0) return '21:9' as '16:9'; // Use 16:9 as fallback
  if (ratio > 1.7) return '16:9';
  if (ratio > 1.4) return '3:2';
  if (ratio > 1.2) return '4:3';
  if (ratio > 0.9) return '1:1';
  if (ratio > 0.7) return '3:4';
  if (ratio > 0.6) return '2:3';
  return '9:16';
}
