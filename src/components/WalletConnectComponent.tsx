import * as React from 'react';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import Button from '@mui/material/Button';
import Grid2 from '@mui/material/Unstable_Grid2';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import { green, red } from '@mui/material/colors';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import {
    useAccount,
    useConnect,
    useDisconnect,
    useNetwork,
    useSignMessage,
    useBalance
  } from "wagmi";
import { useState } from "react";

const WalletConnect = () => { 

 // wagmi Hooks
const { connector: activeConnector, isConnected, address } = useAccount()
const { data, isError, isLoading } = useBalance({
    addressOrName: address,
  })
const { connect, connectors } = useConnect();
const { disconnect } = useDisconnect();
const [message, setMessage] = useState("");
const [network, setNetwork] = useState("");
const [verified, setVerified] = useState(undefined);

const refreshState = () => {
    setNetwork("");
    setMessage("");
    setVerified(undefined);
};

const disconnectWallet = async () => {
        disconnect();
        refreshState();
};
    
const connectWallet = () => {
        connect({ connector: connectors[0] });
};

return (
<React.Fragment>
    <Stack spacing={1} alignItems="center">
        <Stack direction="row" spacing={1}>
            &nbsp;
        </Stack>
      <Stack direction="row" spacing={1}>
            {!activeConnector ? (
                <Button variant="contained"  onClick={connectWallet} color="primary">Trade</Button>
            ) : (
                <Button variant="contained" onClick={disconnectWallet} color="error">Stake</Button>
            )}
      </Stack>
      <Stack direction="row" spacing={1}>
        <Typography variant="overline" display="block" gutterBottom>
            <b>Connection Status</b>
            </Typography>
            {activeConnector ? (<NetworkWifiIcon sx={{ color: green[500] }}/>): (<WifiOffIcon sx={{ color: red[500] }}/>) }
      </Stack>
      <Stack direction="row" spacing={1}>
        <Typography variant="overline" display="block" gutterBottom>
            <b>Account</b> {activeConnector ? address : "" }
        </Typography>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Typography variant="overline" display="block" gutterBottom>
            <b>Balance</b> {data?.formatted} {data?.symbol}
        </Typography>
      </Stack>
    </Stack>
</React.Fragment>)
}
export default WalletConnect;