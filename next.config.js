/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.prismic.io', 'images2.imgbox.com', 'lh3.googleusercontent.com'],
  },
  experimental: {
    nftTracing: true
  }
}
