/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co", // ImgBB-এর ইমেজের হোস্টনেম
      },
      {
        protocol: "https",
        hostname: "**.ibb.co", // অন্য যেকোনো ibb সাবডোমেইনের জন্য
      },
    ],
  },
};

export default nextConfig;