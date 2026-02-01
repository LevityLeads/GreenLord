import { NextRequest, NextResponse } from 'next/server';
import {
  createImageTask,
  getAspectRatioFromDimensions,
  addStyleSuffix,
} from '@/lib/kie-ai';

export interface GenerateImageRequest {
  imageId: string;
  alt: string;
  prompt: string;
  width: number;
  height: number;
}

export interface GenerateImageResponse {
  success: boolean;
  taskId?: string;
  error?: string;
  imageId: string;
}

export async function POST(request: NextRequest): Promise<NextResponse<GenerateImageResponse>> {
  try {
    const body: GenerateImageRequest = await request.json();
    const { imageId, alt, prompt, width, height } = body;

    // Validate required fields
    if (!imageId || !alt || !prompt || !width || !height) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields: imageId, alt, prompt, width, height',
          imageId: imageId || 'unknown',
        },
        { status: 400 }
      );
    }

    // Get API key from environment
    const apiKey = process.env.KIE_AI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          error: 'KIE_AI_API_KEY environment variable not configured',
          imageId,
        },
        { status: 500 }
      );
    }

    // Add style suffix based on detected image type
    const finalPrompt = addStyleSuffix(prompt, alt);

    // Determine aspect ratio from dimensions
    const aspectRatio = getAspectRatioFromDimensions(width, height);

    // Use 1K resolution for web images (cost-effective and sufficient quality)
    const resolution: '1K' | '2K' | '4K' = '1K';

    // Create the task (returns immediately, doesn't wait for completion)
    const result = await createImageTask(apiKey, {
      prompt: finalPrompt,
      aspectRatio,
      resolution,
      outputFormat: 'png',
    });

    if ('error' in result) {
      return NextResponse.json(
        {
          success: false,
          error: result.error,
          imageId,
        },
        { status: 500 }
      );
    }

    // Return taskId immediately - frontend will poll for completion
    return NextResponse.json({
      success: true,
      taskId: result.taskId,
      imageId,
    });
  } catch (error) {
    console.error('Generate image API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        imageId: 'unknown',
      },
      { status: 500 }
    );
  }
}
