import * as React from 'react';
import { useEffect, useState  } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { usePersistentContext } from './../hooks/persistentHook'

const INFURA_ID = "a628eb4a2b7e46cea4a5e85ae2f49035";

function getNetworkFromChainId(chainId: any): string {
    //alert(chainId)
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

export const useWeb3Modal = (apiKey: String) => {

    const [theme, setTheme] = usePersistentContext('application_theme', 'dark');
    const [connectionStatus, setConnectionStatus] = usePersistentContext('connection_status',  false);
    const [account, setAccount] = usePersistentContext('account',  '');
    const [network, setNetwork] = usePersistentContext('network',  'Ethereum');
    const [provider, setProvider] = useState<any | undefined> ();
    const [library, setLibrary] = useState<ethers.providers.Web3Provider | undefined>();
    const [signature, setSignature] = useState("");
    const [error, setError] = useState("");
    const [chainId, setChainId] = useState();
    const [message, setMessage] = useState("");
    const [signedMessage, setSignedMessage] = useState("");
    const [verified, setVerified] = useState();

    const providerOptions = {
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

      const disconnect_Web3Wallet = async () => {
        await web3Modal.clearCachedProvider();
        setAccount('');
        setConnectionStatus(false);
      };
      const connect_Web3Wallet = async () => {
        try {
            if(connectionStatus ===false) {
            const web3Provider = await web3Modal.connect();
            const library = new ethers.providers.Web3Provider(web3Provider);

            const web3Accounts = await library.listAccounts();
            const network = await library.getNetwork();

            const balance = await library.getBalance(web3Accounts[0]);
            const balanceInEth = ethers.utils.formatEther(balance);
            setProvider(web3Provider);
            setLibrary(library);
            setAccount(web3Accounts[0]);
            setConnectionStatus(true);
            }
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        if (provider?.on) {
          const handleAccountsChanged = (accounts:any) => {
            if (accounts) { 
              setAccount(accounts[0]);
            }
          };
          const handleChainChanged = (_hexChainId:any) => {
            setChainId(_hexChainId);
            setNetwork(getNetworkFromChainId(_hexChainId));
          };
    
          const handleDisconnect = () => {
            console.log("disconnect", error);
            disconnect_Web3Wallet();
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
      }, [provider, disconnect_Web3Wallet]);
    return [connect_Web3Wallet, disconnect_Web3Wallet, provider, library, connectionStatus, network, chainId, account];
}
