import * as React from 'react';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import { usePersistentContext } from './../../hooks/persistentHook'
import { useWeb3Modal } from './../../common/Web3ModalConnector'


const INFURA_ID = 'a628eb4a2b7e46cea4a5e85ae2f49035';

const WalletSelectButton = () => {

    const [theme, setTheme] = usePersistentContext('application_theme', 'dark');
    const [network, setNetwork] = usePersistentContext('network',  'Ethereum');
    const [connectionStatus, setConnectionStatus] = usePersistentContext('connection_status',  false);
    const [connect_Web3Wallet, disconnect_Web3Wallet] = useWeb3Modal('satya');
    return (
    <React.Fragment>
        <Box display="flex" justifyContent="center" alignItems="center">
            {!connectionStatus ? (
            <Fab onClick={connect_Web3Wallet} size="medium" color = "primary" variant="extended">Connect Wallet</Fab>
            ) : (
            <Fab onClick={disconnect_Web3Wallet} size="medium" color = "primary" variant="extended" >Disconnect</Fab>
            )}
        </Box>
    </React.Fragment>
    );
}
export default WalletSelectButton;


