/** @type {import('next').NextConfig} */
const { legacyRedirects } = require('./lib/routes')
const nextConfig = {
  async redirects() { return legacyRedirects },
  // Removed 'output: export' to enable API routes on Netlify
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ["cdn.sanity.io", "www.kadreetech.com"],
  },
};

module.exports = nextConfig;
