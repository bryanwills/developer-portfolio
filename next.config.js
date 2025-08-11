/** @type {import('next').Config} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['github.com', 'bryanwills.dev'],
  },
}

module.exports = nextConfig
