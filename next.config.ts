import type { NextConfig } from 'next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/laravel-api/:path*',
        destination: 'http://localhost:8000/:path*',
      },
    ]
  },
};

export default nextConfig;

