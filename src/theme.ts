import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const theme = createTheme({
  palette: {
    common: {
      white: '#fbfbfb',
      black: '#333',
    },
    primary: {
      light: '#7FE2FF',
      main: '#44B0E2',
      dark: '#0081B0',
      contrastText: '#fff',
    },
    secondary: {
      main: red[700],
    },
    text: {
      primary: 'rgba(3, 3, 3, 0.87)',
    },
    info: {
      light: '#75e7ff',
      main: '#33b5e5',
      dark: '#0099cc',
      contrastText: '#fff',
    },
    success: {
      light: '#5efc80',
      main: '#00c851',
      dark: '#007e33',
      contrastText: '#fff',
    },
    warning: {
      light: '#ffed67',
      main: '#ffbb33',
      dark: '#ff8800',
      contrastText: '#3e2723',
    },
  },
  props: {
    MuiWithWidth: {
      initialWidth: 'sm',
    },
  },
});

theme.overrides = {};

export default theme;
