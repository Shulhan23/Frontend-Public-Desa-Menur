/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/laravel-api/:path*",
        destination: "http://api.desamenur.com/:path*", // HTTPS ✅
      },
    ];
  },
};

module.exports = nextConfig;
