const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 60,
    domains: ['paulapplegate.com'],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  swcMinify: true,
};
staticImage: true,
module.exports = withContentlayer(nextConfig);
