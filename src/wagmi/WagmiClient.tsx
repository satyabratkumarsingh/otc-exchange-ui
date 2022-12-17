import { configureChains, defaultChains, chain } from "wagmi";

import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WagmiConfig, createClient } from "wagmi";
import { constants } from "fs/promises";


// API key for Ethereum node
// Two popular services are Infura (infura.io) and Alchemy (alchemy.com)
const infuraId = "a628eb4a2b7e46cea4a5e85ae2f49035";

// Configure chains for connectors to support
const { chains, provider } = configureChains(defaultChains, [
  infuraProvider({ apiKey: infuraId}),
  publicProvider()
]);

// Set up connectors
const connectors = [
  new InjectedConnector({
    chains
  })
];

export const WagmiClient = createClient({
    autoConnect: true,
    connectors: connectors,
    provider,
})