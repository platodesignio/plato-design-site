import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // エッジ配信での404を防止するための最も安定した設定
  trailingSlash: true,
};

export default nextConfig;
