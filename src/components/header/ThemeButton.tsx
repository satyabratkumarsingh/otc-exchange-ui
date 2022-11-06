import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import ListItemIcon from '@mui/material/ListItemIcon';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

const ThemeButton = () => { 

    const { data, isLoading} = useQuery(['themeSelected'], async () =>  String(localStorage.getItem("darkState")), {
        refetchOnMount: true
      });
    
    return (
        <div>
          {data === "light" ? (
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