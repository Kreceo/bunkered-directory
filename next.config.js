/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['d23jngptvnttd7.cloudfront.net'],
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    env: {
        SITE_URL: process.env.SITE_URL,
    }
}

module.exports = nextConfig
