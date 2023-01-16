import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  / See Provider Options Section /
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "cc0e03139645420a95ee8438d22afe7b"
    }
  },
  binancechainwallet: {
    package: true
  },
};


const web3Modal = new Web3Modal({
    network: "ropsten",
    theme: "dark",
    cacheProvider: true,
    providerOptions 
  });
  

// const provider = await web3Modal.connect();

// const web3 = new Web3(provider);


async function connectwallet() { 
    var provider = await web3Modal.connect();
    var web3 = new Web3(provider); 
    await window.ethereum.send('eth_requestAccounts'); 
    // var accounts = await web3.eth.getAccounts(); 
    // const account = accounts[0]; 
    // document.getElementById('wallet-address').textContent = account; 
    // const contract = new web3.eth.Contract(ABI, ADDRESS);
}


const   Demo =  ()  => {
    return (
      <> 
      <div className="text-center">
        <h1 className="h4">Welcome again</h1>
        <button onClick={connectwallet}>try To Connect</button>
      </div>     
      </>
    );
  }
  
  export default Demo;
  
  