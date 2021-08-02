import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';

import AppBar from '@/components/mui/AppBar';
import Toolbar from '@/components/mui/Toolbar';

import Menu from './Menu';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    width: drawerWidth,
  },
  root: {
    display: 'flex',
  },
}));

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar direction="horizontal" position="fixed">
        <Toolbar direction="horizontal" disableGutters>
          <Box flex={1} />
          <IconButton
            color="inherit"
            href="https://www.youtube.com/channel/UCpd1BDpjvPZB1q7wlgp_PDg"
          >
            <YouTubeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
        classes={{ paper: classes.drawerPaper }}
      >
        <Menu onDrawerClose={handleDrawerClose} />
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default Header;
