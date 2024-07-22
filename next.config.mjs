/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        // loader: "custom"
        remotePatterns: [{
            protocol: 'https',
            hostname: '**.s3.eu-central-1.amazonaws.com',
            port: '',
        },]
    },
};

export default nextConfig;
