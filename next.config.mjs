/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'is1-ssl.mzstatic.com',
        pathname: '/image/thumb/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'www.unusuallabs.com',
          },
        ],
        destination: 'https://unusuallabs.com',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
