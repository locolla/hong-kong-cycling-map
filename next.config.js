const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');
const { domain } = require('process');

module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

  return {
    images: {
      domains: ['images.ctfassets.net'],
    },
    basePath: '/hong-kong-cycling-map',
  };
};
