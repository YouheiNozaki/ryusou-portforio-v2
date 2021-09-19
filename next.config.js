const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  images: {
    domains: ['images.microcms-assets.io'],
  },
  webpack5: true,
};

module.exports = withVanillaExtract(nextConfig);
