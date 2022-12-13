import '../styles/globals.scss';
import Head from 'next/head';
import { CookiesProvider } from 'react-cookie';
import { MantineProvider } from '@mantine/core';
import React from 'react';
import { AppPropsWithLayout } from '../types';

const TodosApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || (page => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />

        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="msapplication-TileColor" content="#050505" />
        <meta name="theme-color" content="#050505" />
      </Head>

      <CookiesProvider>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: 'light',
            fontFamily: 'Poppins',
          }}
        >
          {getLayout(<Component {...pageProps} />)}
        </MantineProvider>
      </CookiesProvider>
    </>
  );
};

export default TodosApp;
