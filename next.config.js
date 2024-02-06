/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
 images: {
  unoptimized: false,
  // domains: [ 'images.unsplash.com', 'res.cloudinary.com', 'img.etimg.com', 'assets.vogue.com', 'm.media-amazon.com', 'upload.wikimedia.org', ],

  deviceSizes: [
   320, 480, 768, 1080, 1200, 1440, 1920, 2048,
   3840,
  ],

  remotePatterns: [
   {
    protocol: 'https',
    hostname: '**',
   },
   {
    protocol: 'http',
    hostname: 'localhost',
   },
  ],
 },

 sassOptions: {
  includePaths: [
   path.join(__dirname, 'src/styles'),
  ],
 },

 reactStrictMode: false,
};

module.exports = nextConfig;
