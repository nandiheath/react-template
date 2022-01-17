import React, { PropsWithChildren } from 'react';
import { lightTheme, darkTheme } from 'lib/theme';
import { ThemeProvider } from '@mui/material';
import { useAppSelector } from 'states/hooks';

const StatedThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const theme = useAppSelector((state) => state.app.theme);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

export default StatedThemeProvider;
