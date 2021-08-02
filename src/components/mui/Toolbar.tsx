import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Toolbar, { ToolbarProps } from '@material-ui/core/Toolbar';

interface Props extends ToolbarProps {
  direction?: 'horizontal' | 'vertical';
}

const VerticalToolbar = withStyles((theme) => ({
  root: {
    flexDirection: 'column',
    height: '100%',
    minHeight: 'auto',
    minWidth: 56,
    '@media (min-width:0px)': {
      minHeight: 'auto',
      minWidth: 48,
    },
    '@media (min-width:600px)': {
      minHeight: 'auto',
      minWidth: 64,
    },
  },
  gutters: {
    padding: theme.spacing(2, 0),
  },
}))(Toolbar);

const MuiToolbar = ({ direction = 'horizontal', ...props }: Props) => {
  return direction === 'vertical' ? (
    <VerticalToolbar {...props} />
  ) : (
    <Toolbar {...props} />
  );
};

export default MuiToolbar;
