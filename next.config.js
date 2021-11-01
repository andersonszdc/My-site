/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.prismic.io', 'images2.imgbox.com', 'my-site-andersonszdc.s3.sa-east-1.amazonaws'],
  },
  experimental: {
    nftTracing: true
  }
}
