import React,{useState} from "react";
import Web3 from "web3";
import providerForContracts from "../../users/auth/login/SignIn";


export NFTMarketPlaceObj = () =>{

    const NFTMarketPlaceAddress = "0x5FcB72EaACA0C64E5cb2142E43B7965E5DC271ce"

    const [provider,setProvider] = useState(null)
    const [signer,setSigner] = useState(null)
    const [contract,setContract] = useState(null)


    const web3 


    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(tempProvider);

    let tempSigner = tempProvider.getSigner();
    setSigner(tempSigner);

    let tempContract = new ethers.Contract(
      contractAddress,
      Abi.abi,
      tempSigner
    );
    setContract(tempContract);
    console.log("tempContract :  -->", tempContract);


}

