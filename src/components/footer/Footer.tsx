import { Box, useTheme } from "@mui/material";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import { green, red } from '@mui/material/colors';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import {useQuery} from '@tanstack/react-query';
import { usePersistentContext } from './../../hooks/persistentHook'

const Footer = () => {
    const theme = useTheme();
    const [account, setAccount] = usePersistentContext('account',  '');
    const [connectionStatus, setConnectionStatus] = usePersistentContext('connection_status',  false);
    return (
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
        <Box>
        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
            <Typography variant="overline" display="block" gutterBottom>
                <b>Account</b>
            </Typography>
            <Typography>
              {account}
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
              <Typography variant="overline" display="block" gutterBottom>
                <b>Connection Status</b>
              </Typography>
              {connectionStatus == true ? (<NetworkWifiIcon sx={{ color: green[500] }}/>): (<WifiOffIcon sx={{ color: red[500] }}/>) }
          </Stack>
        </Box>
        </Toolbar>
      </Container>
    </AppBar>
    )

  };
  
  export default Footer;