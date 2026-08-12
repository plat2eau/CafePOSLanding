import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "sxhqk8enpzaknmfx.public.blob.vercel-storage.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
