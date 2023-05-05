/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pngimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "files.tecnoblog.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "help.apple.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
