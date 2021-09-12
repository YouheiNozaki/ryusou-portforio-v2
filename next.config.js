// const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const {
//   getGlobalCssLoader,
// } = require('next/dist/build/webpack/config/blocks/css/loaders');

// /**
//  * @param {ConstructorParameters<typeof VanillaExtractPlugin>[0]} pluginOptions Custom config for vanilla-extract
//  */
// function withVanillaExtract(pluginOptions = {}) {
//   /**
//    * @param {any} nextConfig Custom config for Next.js
//    */
//   return (nextConfig = {}) => {
//     return {
//       images: {
//         domains: ['images.microcms-assets.io'],
//       },
//       webpack5: true,
//       webpack(config, options) {
//         const { dev, isServer } = options;

//         config.module.rules.push({
//           test: /\.css$/i,
//           sideEffects: true,
//           use: dev
//             ? getGlobalCssLoader(
//                 {
//                   assetPrefix: options.config.assetPrefix,
//                   future: {
//                     webpack5: true,
//                   },
//                   isClient: !isServer,
//                   isServer,
//                   isDevelopment: dev,
//                 },
//                 [],
//                 [],
//               )
//             : [MiniCssExtractPlugin.loader, 'css-loader'],
//         });

//         const plugins = [];

//         plugins.push(new VanillaExtractPlugin(pluginOptions));

//         if (!dev) {
//           plugins.push(
//             new MiniCssExtractPlugin({
//               filename: 'static/css/[contenthash].css',
//               chunkFilename: 'static/css/[contenthash].css',
//               ignoreOrder: true,
//             }),
//           );
//         }

//         config.plugins.push(...plugins);

//         if (typeof nextConfig.webpack === 'function') {
//           return nextConfig.webpack(config, options);
//         }

//         return config;
//       },
//     };
//   };
// }

// module.exports = withVanillaExtract()();

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  images: {
    domains: ['images.microcms-assets.io'],
  },
  webpack5: true,
};

module.exports = withVanillaExtract(nextConfig);
