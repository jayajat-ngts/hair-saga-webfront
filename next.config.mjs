// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hairsaga-backend.onrender.com",
        port: "",
        pathname: "/uploads/services**",
      },
    ],
  },
};

export default nextConfig;

