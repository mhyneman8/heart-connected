/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ucl.ac.uk',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.mechanobio.info',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.mayoclinic.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.heart.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.tourmyindia.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.mountsinai.org',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
