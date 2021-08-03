import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useRouter } from 'next/router';
import {
  createStyles,
  alpha,
  Theme,
  makeStyles,
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Iframe from 'react-iframe';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    border: '0',
    overflow: 'hidden',
  },
  imageListContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
    overflow: 'hidden',
    position: 'fixed',
  },
  embedbutton: {
    position: 'fixed',
    top: 12,
    left: 18,
  },
}));

const article = () => {
  const router = useRouter();
  const classes = useStyles();
  const link = router.query['link']?.toString();
  const backHome = () => {
    router.back();
  };
  return (
    <Container
      disableGutters
      maxWidth={false}
      className={classes.imageListContainer}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={backHome}
        className={classes.embedbutton}
      >
        <ArrowBackIosRoundedIcon />
      </IconButton>
      <Iframe
        url={link}
        width="100%"
        id="myId"
        className={classes.root}
        styles={{ overflow: 'hidden' }}
        height="95%"
        overflow="hidden"
      />
    </Container>
  );
};

export default article;
