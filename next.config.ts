import type { NextConfig } from "next";

// Gunakan dotenv hanya saat development lokal
if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

// Gunakan nilai fallback jika ENV tidak didefinisikan
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.desamenur.com";

// Jangan throw, cukup beri warning di development
if (!process.env.NEXT_PUBLIC_API_URL && process.env.NODE_ENV !== "production") {
  console.warn(
    "⚠️ NEXT_PUBLIC_API_URL is not defined. Using fallback:",
    API_URL
  );
}

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/laravel-api/:path*",
        destination: `${API_URL}/:path*`,
      },
      {
        source: "/storage/:path*",
        destination: `${API_URL}/storage/:path*`,
      },
    ];
  },
};

export default nextConfig;
