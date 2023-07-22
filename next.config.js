/** @type {import('next').NextConfig} */

const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    DATO_CMS_KEY: process.env.DATO_CMS_KEY,
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    SEND_GRID_API_KEY: process.env.SEND_GRID_API_KEY,
  },
};

module.exports = nextConfig;
