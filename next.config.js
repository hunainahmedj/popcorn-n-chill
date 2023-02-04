/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gogocdn.net",
        port: "",
        pathname: "/cover/**",
      },
    ],
  },
};

module.exports = nextConfig;
