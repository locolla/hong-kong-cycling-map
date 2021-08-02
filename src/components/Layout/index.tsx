import React from 'react';
import clsx from 'clsx';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { makeStyles } from '@material-ui/core/styles';

import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';


interface Props {
  children: React.ReactElement | any;
}

const useStyles = makeStyles((theme) => ({
  footer: {},
  main: {
    marginLeft: 56,
    '@media (min-width:0px)': {
      marginRight: 0,
      marginLeft: 0,
    },
    '@media (min-width:600px)': {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  root: {
    minWidth: 320,
  },
}));

const Page = ({ children }: Props) => {
  const classes = useStyles();
  const router = useRouter();

  const showAppBar = router.query.inApp !== '1';


  return (
    <React.Fragment>
      <Head>
        <title>香港單車路線導行</title>
        <meta
          name="description"
          content="香港單車路線導行計劃,用意在推廣低碳生活,綠色出行.為此建立一個單車徑影片,地理及交通數據庫"
        />
        <meta
          name="keywords"
          content="低碳生活,綠色出行,香港單車路線導行,地圖導行,單車"
        />
        <Meta />
      </Head>
      <div className={classes.root}>
       
        <main
          className={clsx({
            [classes.main]: showAppBar,
          })}
        >
          {children}
        </main>
      </div>
    </React.Fragment>
  );
};

export default Page;
