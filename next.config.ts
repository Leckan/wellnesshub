/** @type {import('next').NextConfig} */
const nextConfig = {
  // Environment variables are automatically loaded from .env.local
  // We only need to expose public variables here
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors:true
  }
};

export default nextConfig;
