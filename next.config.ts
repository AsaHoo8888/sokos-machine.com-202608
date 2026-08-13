import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async redirects() {
    return [
      { source: "/home-v2", destination: "/", permanent: true },
      { source: "/about-v2", destination: "/about", permanent: true },
      { source: "/contact-v2", destination: "/contact", permanent: true },
      { source: "/products-v2/:path*", destination: "/products/:path*", permanent: true },
      { source: "/solutions-v2/:path*", destination: "/solutions/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
