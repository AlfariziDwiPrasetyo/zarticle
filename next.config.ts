import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravtar.cc",
      },
      {
        protocol: "https",
        hostname: "50ymvpho8f.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
