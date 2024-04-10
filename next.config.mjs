/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: [
            "abc-demo.cdn.prismic.io",
            "images.prismic.io",
        ]
    },
};


export default nextConfig;
