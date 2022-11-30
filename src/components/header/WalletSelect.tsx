import * as React from 'react';
import Fab from '@mui/material/Fab';
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useEffect, useState  } from "react";
import Box from '@mui/material/Box';
import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { usePersistentContext } from './../../hooks/persistentHook'

const INFURA_ID = 'a628eb4a2b7e46cea4a5e85ae2f49035';

const WalletSelectButton = () => {

    const [theme, setTheme] = usePersistentContext('application_theme',  'dark');
    const [connectedAccount, setConnectedAccount] = useState("");
    const [connectionStatus, setConnectionStatus] = usePersistentContext('connection_status',  false);
    const [account, setAccount] = usePersistentContext('account',  '');
    const [network, setNetwork] = usePersistentContext('network',  'Ethereum');

    function getNetworkFromChainId(chainId: any): string {
      if(chainId === '0x1') {
        return 'Ethereum';
      } else if(chainId === '0xa') {
        return 'Optimism';
      } else if(chainId === '0x5') {
        return 'Goerli';
      } else if(chainId === '0xaa36a7') {
        return 'Sepolia';
      } else { 
        return 'Unknown';
      }
    }

    const [provider, setProvider] = useState<any | undefined> ();
    const [library, setLibrary] = useState<ethers.providers.Web3Provider | undefined>();
    const [signature, setSignature] = useState("");
    const [error, setError] = useState("");
    const [chainId, setChainId] = useState();
    const [message, setMessage] = useState("");
    const [signedMessage, setSignedMessage] = useState("");
    const [verified, setVerified] = useState();
    const providerOptions = {
        binancechainwallet: {
          package: true,
        },
        walletconnect: {
          package: WalletConnect, // required
          options: {
            infuraId:  INFURA_ID// required
          }
        },
      
        coinbasewallet: {
          package: CoinbaseWalletSDK, // Required
          options: {
            appName: "Coinbase", // Required
            infuraId: INFURA_ID, // Required
            chainId: 1, //4 for Rinkeby, 1 for mainnet (default)
          },
        },
      };
      const web3Modal = new Web3Modal({
        network: "ethereum",
        theme: 'dark', 
        cacheProvider: false,
        providerOptions, // required
      });
      const connectWeb3Wallet = async () => {
        try {
          const web3Provider = await web3Modal.connect();
          const library = new ethers.providers.Web3Provider(web3Provider);

          const web3Accounts = await library.listAccounts();
          const network = await library.getNetwork();

          setProvider(web3Provider);
          setLibrary(library);

          setAccount(web3Accounts[0]);
          setConnectionStatus(true);
          setConnectedAccount(web3Accounts[0]);
        } catch (error) {
          console.log(error);
        }
      };
    
      const disconnect = async () => {
        await web3Modal.clearCachedProvider();
        setConnectedAccount("");
        setAccount('');
        setConnectionStatus(false);
      };

      useEffect(() => {
        if (provider?.on) {
          const handleAccountsChanged = (accounts:any) => {
            console.log("accountsChanged", accounts);
            alert(accounts[0]);
            if (accounts) setAccount(accounts[0]);
          };
    
          const handleChainChanged = (_hexChainId:any) => {
            setChainId(_hexChainId);
            alert(getNetworkFromChainId(_hexChainId));
            setNetwork(getNetworkFromChainId(_hexChainId));
            //queryClient.setQueryData(['network'], getNetworkFromChainId(_hexChainId));
          };
    
          const handleDisconnect = () => {
            console.log("disconnect", error);
            disconnect();
          };
    
          provider.on("accountsChanged", handleAccountsChanged);
          provider.on("chainChanged", handleChainChanged);
          provider.on("disconnect", handleDisconnect);
    
          return () => {
            if (provider.removeListener) {
              provider.removeListener("accountsChanged", handleAccountsChanged);
              provider.removeListener("chainChanged", handleChainChanged);
              provider.removeListener("disconnect", handleDisconnect);
            }
          };
        }
      }, [provider, disconnect]);

    return (
    <React.Fragment>
        <Box display="flex" justifyContent="center" alignItems="center">
            {!connectedAccount ? (
            <Fab onClick={connectWeb3Wallet} size="medium" color = "primary" variant="extended">Connect Wallet</Fab>
            ) : (
            <Fab onClick={disconnect} size="medium" color = "primary" variant="extended" >Disconnect</Fab>
            )}
        </Box>
    </React.Fragment>
    );
}
export default WalletSelectButton;


