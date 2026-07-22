/** @type {import('next').NextConfig} */
const nextConfig = {
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
