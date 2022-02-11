const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
  webpack5: true,
};

module.exports = nextConfig;
