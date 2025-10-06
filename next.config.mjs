/** @type {import('next').NextConfig} */
// const nextConfig = {};


const nextConfig = {
    // Remove experimental turbopack settings if added
    // or explicitly use webpack:
    webpack: (config) => {
        return config;
    },
};

// module.exports = nextConfig;
export default nextConfig;
  