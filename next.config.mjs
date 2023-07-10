/** @type {import('next').NextConfig} */
import { withPlausibleProxy } from 'next-plausible'

const imageSrcDomains = [
  'cdn.sanity.io',
  'source.unsplash.com',
  'public.tableau.com',
]

// const isAmplify = Boolean(process.env.AWS_APP_ID)
const isProduction = process.env.NODE_ENV === 'production'

const sanityProjectDomain = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io`

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'Content-Security-Policy',
    value: `default-src 'self' ${sanityProjectDomain}; img-src ${imageSrcDomains.join(
      ' '
    )} 'self'; style-src 'self' 'unsafe-inline'; frame-src 'self' https://www.youtube-nocookie.com; script-src 'self' ${
      isProduction ? '' : "'unsafe-eval'"
    } 'unsafe-hashes' 'sha256-/6SBPqW+GW+//4nlXX6Y1nR9dWlh0gsQJ6KK71djH6A='`,
  },
]

const config = withPlausibleProxy()({
  output: 'standalone',
  images: {
    remotePatterns: imageSrcDomains.map((domain) => ({ hostname: domain })),
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: isProduction,
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: isProduction,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source: '/studio/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: '',
          },
        ],
      },
    ]
  },
})

export default config
