/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  // for remove icon loading vercel when change router
  devIndicators: {
    buildActivity: false,
  },
}

module.exports = nextConfig
