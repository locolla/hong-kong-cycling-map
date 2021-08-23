import React, { useState } from 'react';
import TagManager from 'react-gtm-module';

import NextApp from 'next/app';
import type { AppProps, AppContext } from 'next/app';

import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from '@/components/Layout';

import theme from '@/theme';

const GTM_CONTAINER_ID = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;

class MyApp extends NextApp<AppProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles?.parentNode?.removeChild(jssStyles);

    if (GTM_CONTAINER_ID) {
      TagManager.initialize({ gtmId: GTM_CONTAINER_ID });
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default MyApp;
