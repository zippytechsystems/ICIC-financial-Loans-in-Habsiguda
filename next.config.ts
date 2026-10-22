import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["localhost:3000", "10.11.50.204:3000", "10.11.50.204"],
  trailingSlash: true,
};

export default nextConfig;
