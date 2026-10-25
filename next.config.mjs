import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

export default function config(phase) {
  return {
    output: 'export',
    trailingSlash: true,
    images: { unoptimized: true },
    // Keep production builds from overwriting an active development cache.
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
  };
}
