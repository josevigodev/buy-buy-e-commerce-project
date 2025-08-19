import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/*'),
    ],
  },
};

export default nextConfig;
