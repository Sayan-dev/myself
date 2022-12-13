import { Box, Group, Paper, Tabs } from '@mantine/core';
import Head from 'next/head';
import { ReactElement } from 'react';
import AppWrapper from '../components/Common/AppWrapper';

import CONST_VALUE from '../data/constants';
import { NextPageWithLayout } from '../types';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>{CONST_VALUE.pageTitle.index}</title>
        <meta name="description" content="Generated by Sayanta" />
      </Head>

      <Paper className="max-h-screen pt-20 rounded-none bg-background-light">
        <main style={{ padding: '0px', maxWidth: '1336px', margin: '0px auto' }}>
          <Paper className="pt-5 h-[80vh]">
            <div>Hello</div>
          </Paper>
        </main>
      </Paper>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppWrapper>{page}</AppWrapper>;
};

export default Home;
