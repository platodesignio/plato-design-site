/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // パス解決の曖昧さを完全に排除
};

module.exports = nextConfig;
