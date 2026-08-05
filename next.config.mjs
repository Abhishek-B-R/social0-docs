import { createMDX } from 'fumadocs-mdx/next';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      // CLI moved out of integrations
      {
        source: '/docs/integrations/cli',
        destination: '/docs/cli',
        permanent: true,
      },
      {
        source: '/docs/integrations/cli/:path*',
        destination: '/docs/cli/:path*',
        permanent: true,
      },
      // MCP moved out of integrations
      {
        source: '/docs/integrations/mcp',
        destination: '/docs/mcp',
        permanent: true,
      },
      {
        source: '/docs/integrations/mcp/:path*',
        destination: '/docs/mcp/:path*',
        permanent: true,
      },
      // Integrations REST hub → API
      {
        source: '/docs/integrations/api',
        destination: '/docs/api',
        permanent: true,
      },
      {
        source: '/docs/integrations/api/:path*',
        destination: '/docs/api/:path*',
        permanent: true,
      },
      {
        source: '/docs/integrations',
        destination: '/docs/cli',
        permanent: true,
      },
      // Developer hub → API overview
      {
        source: '/docs/developer',
        destination: '/docs/api',
        permanent: true,
      },
      {
        source: '/docs/developer/:path*',
        destination: '/docs/api',
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX();
export default withMDX(config);
