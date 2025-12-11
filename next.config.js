/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'minio.local', 'your-cdn.com']
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    MINIO_ENDPOINT: process.env.MINIO_ENDPOINT,
    MINIO_BUCKET: process.env.MINIO_BUCKET
  }
};

module.exports = nextConfig;
