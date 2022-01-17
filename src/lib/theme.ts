import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  typography: {
    fontFamily: ['Avenir Next', 'Muli', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#a0c3e7',
    },
    secondary: {
      main: '#FBBA72',
    },
  },
});

export const darkTheme = createTheme({
  typography: {
    fontFamily: ['Avenir Next', 'Muli', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#FBBA72',
    },
    secondary: {
      main: '#a0c3e7',
    },
  },
});
