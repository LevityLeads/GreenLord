import { NextRequest, NextResponse } from 'next/server';
import { getTaskStatus } from '@/lib/kie-ai';

export interface CheckImageStatusResponse {
  success: boolean;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  imageUrl?: string;
  error?: string;
  progress?: number;
}

export async function GET(request: NextRequest): Promise<NextResponse<CheckImageStatusResponse>> {
  try {
    const taskId = request.nextUrl.searchParams.get('taskId');

    if (!taskId) {
      return NextResponse.json(
        {
          success: false,
          status: 'failed',
          error: 'Missing taskId parameter',
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
          status: 'failed',
          error: 'KIE_AI_API_KEY environment variable not configured',
        },
        { status: 500 }
      );
    }

    // Check task status
    const statusResult = await getTaskStatus(apiKey, taskId);

    // Debug logging
    console.log('Task status result:', JSON.stringify(statusResult));

    if ('error' in statusResult) {
      return NextResponse.json(
        {
          success: false,
          status: 'failed',
          error: statusResult.error,
        },
        { status: 500 }
      );
    }

    // Check if completed successfully
    if (statusResult.successFlag === 1) {
      // Try to get URL from response.resultUrls first
      let imageUrl = statusResult.response?.resultUrls?.[0];

      // Fall back to parsing resultJson
      if (!imageUrl && statusResult.resultJson) {
        try {
          const parsed = JSON.parse(statusResult.resultJson);
          imageUrl = parsed.resultUrls?.[0];
        } catch {
          // Ignore parse errors
        }
      }

      if (imageUrl) {
        return NextResponse.json({
          success: true,
          status: 'completed',
          imageUrl,
        });
      } else {
        return NextResponse.json({
          success: false,
          status: 'failed',
          error: 'No image URL in response',
        });
      }
    }

    // Check if failed (successFlag 2 or 3 means failure)
    if (statusResult.successFlag === 2 || statusResult.successFlag === 3) {
      return NextResponse.json({
        success: false,
        status: 'failed',
        error: statusResult.errorMessage || 'Image generation failed',
      });
    }

    // Still processing
    return NextResponse.json({
      success: true,
      status: statusResult.status || 'processing',
      progress: statusResult.progress,
    });
  } catch (error) {
    console.error('Check image status API error:', error);
    return NextResponse.json(
      {
        success: false,
        status: 'failed',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
