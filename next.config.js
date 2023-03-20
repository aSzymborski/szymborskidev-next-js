/** @type {import('next').NextConfig} */

const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    DATO_CMS_KEY: process.env.DATO_CMS_KEY,
  },
}

module.exports = nextConfig
