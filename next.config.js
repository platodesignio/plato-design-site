/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // We remove any redirects or headers that could cause loops.
  // Ensure the site is treated as a standard public Next.js app.
};

module.exports = nextConfig;
