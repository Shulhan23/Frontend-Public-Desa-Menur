/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const API_URL =
      process.env.NEXT_PUBLIC_API_URL || "https://api.desamenur.com";

    // Log a warning if the environment variable is not set
    if (!process.env.NEXT_PUBLIC_API_URL) {
      console.warn(
        "⚠️ Warning: NEXT_PUBLIC_API_URL is not defined. Using fallback URL:",
        API_URL
      );
    }

    return [
      {
        source: "/laravel-api/:path*",
        destination: `${API_URL}/:path*`, // Dynamic API URL
      },
      {
        source: "/storage/:path*",
        destination: `${API_URL}/storage/:path*`, // For storage routes (e.g., images)
      },
    ];
  },
};

module.exports = nextConfig;
