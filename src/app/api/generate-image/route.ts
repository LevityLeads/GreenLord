import { NextRequest, NextResponse } from 'next/server';
import {
  generateImage,
  buildPropertyImagePrompt,
  getAspectRatioFromDimensions,
} from '@/lib/kie-ai';

export interface GenerateImageRequest {
  alt: string;
  description: string;
  width: number;
  height: number;
  instructions?: string[];
  imageId: string; // Unique identifier for this image placement
}

export interface GenerateImageResponse {
  success: boolean;
  imageUrl?: string;
  error?: string;
  taskId?: string;
  imageId: string;
}

export async function POST(request: NextRequest): Promise<NextResponse<GenerateImageResponse>> {
  try {
    const body: GenerateImageRequest = await request.json();
    const { alt, description, width, height, instructions, imageId } = body;

    // Validate required fields
    if (!alt || !description || !width || !height || !imageId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields: alt, description, width, height, imageId',
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

    // Build the prompt
    const prompt = buildPropertyImagePrompt(alt, description, instructions);

    // Determine aspect ratio from dimensions
    const aspectRatio = getAspectRatioFromDimensions(width, height);

    // Use 1K resolution for web images (cost-effective and sufficient quality)
    const resolution: '1K' | '2K' | '4K' = '1K';

    // Generate the image
    const result = await generateImage(apiKey, {
      prompt,
      aspectRatio,
      resolution,
      outputFormat: 'png',
    });

    if (result.success && result.imageUrl) {
      return NextResponse.json({
        success: true,
        imageUrl: result.imageUrl,
        taskId: result.taskId,
        imageId,
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          error: result.error || 'Image generation failed',
          taskId: result.taskId,
          imageId,
        },
        { status: 500 }
      );
    }
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
