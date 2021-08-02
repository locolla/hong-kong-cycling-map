import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MuiLink from '@material-ui/core/Link';

import CloseIcon from '@material-ui/icons/Close';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

import useWidth from '@/components/hook/useWidth';

interface Props {
  onDrawerClose: Function;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  root: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
}));

const Menu = ({ onDrawerClose }) => {
  const classes = useStyles();
  const width = useWidth();

  return (
    <div className={classes.root}>
      <IconButton
        color="inherit"
        onClick={onDrawerClose}
        className={classes.closeButton}
      >
        <CloseIcon />
      </IconButton>
      <List>
        <ListItem button>
          <ListItemText primary={'首頁'} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={'附近路線'} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={'熱門路線'} />
        </ListItem>
      </List>
      <Box flex={1} />
      <Button
        color="inherit"
        startIcon={<YouTubeIcon />}
        href="https://www.youtube.com/channel/UCpd1BDpjvPZB1q7wlgp_PDg/featured"
        target="_blank"
      >
        LocoBike樂區踩
      </Button>
    </div>
  );
};

export default Menu;
