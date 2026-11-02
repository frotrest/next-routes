import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';

const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.dummyjson.com" }, {
        protocol: "https", hostname: "dummyjson.com"
      },
    {protocol:"https",
      hostname: "avatars.githubusercontent.com"
    }],
  },
  /* config options here */
  // reactCompiler: true,
};

export default analyzer(nextConfig);
