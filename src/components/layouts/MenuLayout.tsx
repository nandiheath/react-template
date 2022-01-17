import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import { PropsWithChildren } from 'react';
import { useAppDispatch, useAppSelector } from 'states/hooks';
import { toggleTheme } from 'states/slices/app';
import { Outlet } from 'react-router-dom';
export default function ButtonAppBar({ children }: PropsWithChildren<{}>) {
  const theme = useAppSelector((state) => state.app.theme);
  const dispatch = useAppDispatch();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" className="flex-grow">
            News
          </Typography>
          <IconButton
            size="small"
            aria-label="menu"
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {theme === 'dark' ? <BrightnessHighIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className="m-4">
        <Outlet />
      </div>
    </>
  );
}
