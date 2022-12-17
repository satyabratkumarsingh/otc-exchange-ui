import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';
import Fab from '@mui/material/Fab';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { SvgIcon } from '@mui/material';
import {useQueryClient} from '@tanstack/react-query';
import ThemeButton from './ThemeButton';
import NetworkSelect from './NetworkSelect';
import WalletSelect from  './WalletSelect';
import { usePersistentContext } from './../../hooks/persistentHook'
import { themesList } from 'web3modal';

const pages = ['Trade', 'Stake'];
const settings = ['Profile', 'Theme', 'Twitter', 'Docs', 'Logout'];

const Header = () => {

  const [theme, setTheme] = usePersistentContext('application_theme', 'dark');
  console.log('@@@@ HEADER THEME', theme);
  const [switchState, setSwitchState] = useState(false);

  const handleThemeChange = () => {
    setSwitchState(switchState === true ? false : true);
    if (theme === "light") { 
      setTheme('dark');
    } else { 
      setTheme('light');
    }
  };

    /*if (darkState === "light") {
      setDarkState("dark");
      queryClient.setQueryData(['themeSelected'], "dark");
      localStorage.setItem("darkState", "dark");
    } else {
      setDarkState("light");
      localStorage.setItem("darkState", "light");
      queryClient.setQueryData(['themeSelected'], "light");
    }*/
  //};

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    alert(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
    // alert(event.currentTarget);
  };

  const handleCloseNavMenu = () => { 

    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
   
    setAnchorElUser(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
        <Box>
        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
            <Fab size="medium" color = "primary" variant="extended" >
                  <Link to={`/trade`} style={{textDecoration: "none"}}>
                    Trade     
                  </Link>
                </Fab>
                <Fab size="medium" color = "primary" variant="extended" >
                  <Link to={`/stake`} style={{textDecoration: "none"}}>
                    Stake    
                  </Link>
                </Fab>
          </Stack>
        </Box>
        <Box>
          <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
            <NetworkSelect></NetworkSelect>           
            <WalletSelect></WalletSelect>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px', padding: 5 }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
               <MenuItem>
              <ListItemIcon>
                <InfoIcon fontSize="small" />
              </ListItemIcon>
                About
              </MenuItem> 
              <MenuItem>
              <ListItemIcon>
                <AccountCircleIcon fontSize="small" />
              </ListItemIcon>
                My Account
              </MenuItem> 
              <MenuItem onClick={handleThemeChange}>
                <ThemeButton/>
              </MenuItem> 
              <MenuItem>
              <ListItemIcon>
                <TwitterIcon fontSize="small" />
              </ListItemIcon>
                Twitter
              </MenuItem> 
              <MenuItem>
              <ListItemIcon>
                <ArticleIcon fontSize="small" />
              </ListItemIcon>
                Docs
              </MenuItem> 
            </Menu>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
