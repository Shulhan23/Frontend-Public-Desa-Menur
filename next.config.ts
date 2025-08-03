/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || "https://api.desamenur.com",
  },
  async rewrites() {
    return [
      {
        source: "/laravel-api/:path*",
        destination: `${
          process.env.NEXT_PUBLIC_API_URL || "https://api.desamenur.com"
        }/:path*`,
      },
      {
        source: "/storage/:path*",
        destination: `${
          process.env.NEXT_PUBLIC_API_URL || "https://api.desamenur.com"
        }/storage/:path*`,
      },
    ];
  },
};

export default nextConfig;
