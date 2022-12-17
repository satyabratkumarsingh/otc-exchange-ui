import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import ListItemIcon from '@mui/material/ListItemIcon';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { usePersistentContext } from './../../hooks/persistentHook'


const ThemeButton = () => { 
    const [theme, setTheme] = usePersistentContext('application_theme',  'dark');
    console.log('@@@@ THEME BUTTON THEME', theme);
    return (
        <div>
          {theme === "light" ? (
                <ListItemIcon >
                    <Stack spacing={1} direction="row">
                        <DarkModeIcon></DarkModeIcon>
                        <Typography>Dark</Typography>
                    </Stack>
                </ListItemIcon>
                
          ) : (
                <ListItemIcon >
                     <Stack spacing={1} direction="row">
                        <LightModeIcon></LightModeIcon>
                        <Typography>Light</Typography>
                    </Stack>
                </ListItemIcon>
            ) }
        </div>
      );
}
export default ThemeButton;