/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['my-site-andersonszdc.s3.sa-east-1.amazonaws.com', 'images.unsplash.com'],
  },
  experimental: {
    nftTracing: true
  }
}
