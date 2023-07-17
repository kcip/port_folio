/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cdn.sanity.io",
      "localhost",
      "https://cdn2.thecatapi.com/images/**",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.thecatapi.com",
      },
    ],
  },
};

module.exports = nextConfig;
