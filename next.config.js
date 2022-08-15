/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/daygrid",
  "@fullcalendar/react",
  "@fullcalendar/interaction"
]);

const nextConfig = withTM({
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_WEATHERAPI_KEY: process.env.NEXT_PUBLIC_WEATHERAPI_KEY,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.weatherapi.com",
      "dinkes.malukuprov.go.id",
    ]
  },
});

module.exports = nextConfig
