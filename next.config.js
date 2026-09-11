/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Tesseract.js usa workers; evitamos que Next intente empaquetarlos en server
  serverExternalPackages: ["tesseract.js"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
    ],
  },
};

module.exports = nextConfig;
