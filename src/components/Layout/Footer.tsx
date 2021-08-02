import React from 'react';
import clsx from 'clsx';

import { useRouter } from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import lightBlue from '@material-ui/core/colors/lightBlue';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: lightBlue[50],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 48,
    padding: theme.spacing(2),
  },
  rootWithAppBar: {
    marginLeft: 56,
    '@media (min-width:0px)': {
      marginLeft: 0,
    },
    '@media (min-width:600px)': {
      marginLeft: 0,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const router = useRouter();

  const showAppBar = router.query.inApp !== '1';

  return (
    <footer
      className={clsx(classes.root, {
        [classes.rootWithAppBar]: showAppBar,
      })}
    >
      <Typography color="textSecondary" variant="body2">
        © 2021 Locolla Limited
      </Typography>
    </footer>
  );
};

export default Footer;
