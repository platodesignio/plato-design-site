/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Force static export to bypass Vercel routing issues
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
