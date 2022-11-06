import { createTheme as createMuiTheme } from '@mui/material/styles';

const themes : { [key: string]: any } = {
    'light': {
        palette: { mode: 'light'}
  },
  'dark': {
    palette: { mode: 'dark' }
  }
};


export const createOTCTheme = (key: any) => {
  return createMuiTheme(themes[key]);
} 
