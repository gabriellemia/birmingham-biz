/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

// module.exports = {
//   images: {
//     domains: ["res.cloudinary.com"],
//   },
// };
export default nextConfig;
