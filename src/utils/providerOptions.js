import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import Web3 from "web3";
import Web3Modal from 'web3modal';



export const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "Web 3 Modal Demo", // Required
      infuraId: process.env.INFURA_KEY // Required unless you provide a JSON RPC url; see `rpc` below
    }
  },
  binancechainwallet: {
    package: true
  },
  walletconnect: {
    package: WalletConnect, // required
    options: {
      
      rpc: {
        1: "https://mainnet.mycustomnode.com",
        80001: "https://matic-mumbai.chainstacklabs.com/",
        137 : "https://polygon-rpc.com",
        
      },
    }
  },
    coinbasewallet: {
      package: CoinbaseWalletSDK, 
      options: {
        
        rpc: "https://matic-mumbai.chainstacklabs.com/", 
        chainId: 80001, 
        darkMode: false 
      }
    }


  
}
