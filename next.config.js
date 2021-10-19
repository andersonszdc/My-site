/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.prismic.io', 'images2.imgbox.com', 'https://lh3.googleusercontent.com'],
  },
  experimental: {
    nftTracing: true
  }
}
