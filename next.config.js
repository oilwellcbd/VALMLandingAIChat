/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['valoansfinance.com'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
