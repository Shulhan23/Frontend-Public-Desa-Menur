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
  experimental: {
    appDir: true,
  },
}

export default nextConfig
