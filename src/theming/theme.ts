import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: '#282a36',
      },
      secondary: {
        main: '#DBDBFF',
      },
    },
    shape: {
      borderRadius: 0,
    },
    typography: {
      fontFamily: 'Quicksand',
    },
  })
);
