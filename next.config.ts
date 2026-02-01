import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // Kie.ai generated images (commonly on Google Cloud Storage)
        protocol: 'https',
        hostname: '*.googleapis.com',
      },
      {
        // Kie.ai CDN
        protocol: 'https',
        hostname: '*.kie.ai',
      },
      {
        // Kie.ai may also use other CDNs
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        // AWS S3 buckets (common for AI image hosting)
        protocol: 'https',
        hostname: '*.s3.amazonaws.com',
      },
      {
        // Cloudflare R2 or other CDNs
        protocol: 'https',
        hostname: '*.cloudflare.com',
      },
    ],
  },
};

export default nextConfig;
