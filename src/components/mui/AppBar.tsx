import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar, { AppBarProps } from '@material-ui/core/AppBar';

interface Props extends AppBarProps {
  direction?: 'horizontal' | 'vertical';
}

const VerticalAppBar = withStyles({
  root: {
    height: '100%',
    width: 'auto',
  },
  positionFixed: {
    left: 0,
    right: 'auto',
    top: 0,
  },
})(AppBar);

const BottomAppBar = withStyles({
  root: {
    height: 'auto',
    width: '100%',
  },
  positionFixed: {
    left: 0,
    right: 'auto',
    top: '90%',
    bottom: 0,
  },
})(AppBar);

const MuiAppBar = ({ direction = 'horizontal', ...props }: Props) => {
  return direction === 'vertical' ? (
    <VerticalAppBar {...props} />
  ) : direction === 'horizontal' ? (
    <BottomAppBar {...props} />
  ) : (
    <AppBar {...props} />
  );
};

export default MuiAppBar;
