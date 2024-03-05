/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                port: '',
                hostname: 'st.nettruyenbb.com',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
