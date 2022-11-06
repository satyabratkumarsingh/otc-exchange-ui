import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useState } from "react";
import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { useQuery } from '@tanstack/react-query';

const INFURA_ID = 'a628eb4a2b7e46cea4a5e85ae2f49035';

const WalletSelectButton = () => { 

    const { data, isLoading} = useQuery(['themeSelected'], async () =>  String(localStorage.getItem("darkState")), {
        refetchOnMount: true
      });

    console.log('========== Thememe =======', data)
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
            chainId: 4, //4 for Rinkeby, 1 for mainnet (default)
          },
        },
      };
    
      const web3Modal = new Web3Modal({
        network: "rinkeby",
        theme: data, 
        cacheProvider: false,
        providerOptions, // required
      });
    
      const [connectedAccount, setConnectedAccount] = useState("");
    
      const connectWeb3Wallet = async () => {
        try {
          const web3Provider = await web3Modal.connect();
          const library = new ethers.providers.Web3Provider(web3Provider);
          const web3Accounts = await library.listAccounts();
          setConnectedAccount(web3Accounts[0]);
        } catch (error) {
          console.log(error);
        }
      };
    
      const disconnectWeb3Modal = async () => {
        await web3Modal.clearCachedProvider();
        setConnectedAccount("");
      };


    return (
    <React.Fragment>
            {connectedAccount && <p>Connected to ${connectedAccount}</p>}
            {!connectedAccount ? (
            <Fab onClick={connectWeb3Wallet} size="medium" color = "primary" variant="extended">Connect Wallet</Fab>
            ) : (
            <Fab onClick={disconnectWeb3Modal} size="medium" color = "primary" variant="extended">Disconnect</Fab>
            )}
    </React.Fragment>
    );
}
export default WalletSelectButton;


