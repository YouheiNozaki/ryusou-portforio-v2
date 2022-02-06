const path = require('path');
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
  webpack5: true,
};

module.exports = withVanillaExtract(nextConfig);
