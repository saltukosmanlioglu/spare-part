/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  pageExtensions: ["next.tsx", "next.ts"],
  compiler: {
    relay: {
      src: "./",
      language: "typescript",
    },
  },
  i18n: {
    locales: ["tr", "en"],
    defaultLocale: "tr",
    localeDetection: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
