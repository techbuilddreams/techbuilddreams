import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [{ source: '/home', destination: '/', permanent: true }];
  },
  async rewrites() {
    return [{ source: '/bmf/privacy', destination: '/bmf/privacy.html' }];
  },
};

export default withMDX(nextConfig);
