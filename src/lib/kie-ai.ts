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
