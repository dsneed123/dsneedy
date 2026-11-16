/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  assetPrefix: '', // No prefix needed for the root domain
  basePath: '', // No base path needed for the root domain
  trailingSlash: true,
};

export default nextConfig;
