
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    turbopackFileSystemCacheForDev: false,
  },
  images: {
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'files.fivemerr.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
