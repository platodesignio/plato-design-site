/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 404キャッシュを強制的に入れ替えるための固有ID
  generateBuildId: async () => {
    return 'plato-design-final-sync-v10';
  },
};

module.exports = nextConfig;
