const ComporessionPlugin = require('compression-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  distDir: '.next',
  webpack(config) {
    const prod = process.env.NODE_ENV === 'production';
    const plugins = [...config.plugins];
    if (prod)
      plugins.push(new ComporessionPlugin()); // main.js -> main.js.gz 용량 3분의 1압축

    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
      plugins
    }
  }
});