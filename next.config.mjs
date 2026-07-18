/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/how-it-works",
        destination: "/revive",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
