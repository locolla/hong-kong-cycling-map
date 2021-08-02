import React from 'react';

import { useTheme } from '@material-ui/core';

// favicon.icon should be under the public root folder
// other png files are under public/favicon
const FAVICON_PATH = 'https://asset1.locolla.com/loco/';

const Favicon = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={`${FAVICON_PATH}/apple-icon-57x57.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${FAVICON_PATH}/apple-icon-60x60.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={`${FAVICON_PATH}/apple-icon-72x72.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${FAVICON_PATH}/apple-icon-76x76.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={`${FAVICON_PATH}/apple-icon-114x114.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={`${FAVICON_PATH}/apple-icon-120x120.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={`${FAVICON_PATH}/apple-icon-144x144.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={`${FAVICON_PATH}/apple-icon-152x152.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${FAVICON_PATH}/apple-icon-180x180.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={`${FAVICON_PATH}/android-icon-192x192.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${FAVICON_PATH}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={`${FAVICON_PATH}/favicon-96x96.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${FAVICON_PATH}/favicon-16x16.png`}
      />
      <link
        rel="shortcut icon"
        href="https://asset1.locolla.com/loco/favicon.ico"
      />
      <link rel="manifest" href={`${FAVICON_PATH}/manifest.json`} />
      <meta
        name="msapplication-TileColor"
        content={theme.palette.primary.main}
      />
      <meta
        name="msapplication-TileImage"
        content={`${FAVICON_PATH}/ms-icon-144x144.png`}
      />
      <meta name="theme-color" content={theme.palette.primary.main} />
    </React.Fragment>
  );
};

export default Favicon;
