import React, { useState } from "react";
import { Box, styled, useTheme } from "@mui/system";
import img from "../../../assets/images/icon-N.png";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Container, Typography } from "@mui/material";
import img2 from "../../../assets/images/nftimg.png";
import { useNavigate } from "react-router-dom";
import Web3 from 'web3'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { providerOptions } from '../../../utils/providerOptions'
import AbiNFTMarketPlace from '../../../contracts/NFTMarketPlace.json'
import AbiNFTErc721a from '../../../contracts/NFTErc721a.json'

const Lanchapp = () => {

  const navigate = useNavigate();

  const NFTMarketPlaceAddress = localStorage.getItem("NFTMarketPlaceAddress")
  const NFTErc721aAddress = localStorage.getItem("NFTErc721aAddress")

  // const NFTMarketPlaceAddress = '0x71D473b6e3B0C7809436D7c66141a7483328661b'
  // const NFTErc721aAddress = '0xeA9644dB153759d82Cc15b1fc43048E2725c9f72'

  console.log("local address of  market place", NFTMarketPlaceAddress)
  console.log("local address of  721a", NFTErc721aAddress)
  console.log("storage aadress of market place", localStorage.getItem("NFTMarketPlaceAddress"))
  console.log("storage aadress of 721a", localStorage.getItem("NFTErc721aAddress"))

  const [NFTErc721aContract, setNFTErc721aContract] = useState()
  const [NFTMarketPlaceContract, setNFTMarketPlaceContract] = useState()
  const [providerForContracts, setProviderForContracts] = useState(null)

  let nftCounter = 0
  const renderPage = () => {
    navigate("/users/dashboard");
  };


  const BuyHandler = async () => {

    const web3Modal = new Web3Modal({
      network: 'polygonMumbai',
      theme: 'dark',
      cacheProvider: true,
      providerOptions
    })

    var provider = await web3Modal.connect()
    setProviderForContracts(provider)
    var web3 = new Web3(provider)


    var accounts = await web3.eth.getAccounts()
    const account = accounts[0]

    //NFTErc721aContract contract

    const tempNFTErc721aContract = new web3.eth.Contract(
      AbiNFTErc721a.abi,
      NFTErc721aAddress
    )
    setNFTErc721aContract(tempNFTErc721aContract)
    console.log('tempNFTErc721aContract', tempNFTErc721aContract)

    const tempNFTMarketPlaceContract = new web3.eth.Contract(
      AbiNFTMarketPlace.abi,
      NFTMarketPlaceAddress
    )
    console.log('account ===', account)
    setNFTMarketPlaceContract(tempNFTMarketPlaceContract)
    console.log('tempNFTMarketPlaceContract==', tempNFTMarketPlaceContract)

    console.log('== nftCounter ==', nftCounter + 1)

    // for(let i=7;i<12;i++){
      const buyNFT = await tempNFTMarketPlaceContract.methods
      .buyNFT(NFTErc721aAddress,14)
      .send({ from: account })
      console.log('buyNFT ====', await buyNFT)
    // }
    
    // if (buyNFT != null) {
    //   nftCounter += 1;
    // }

  }

  return (
    <>
      <Box
        sx={{ backgroundColor: "#03070C" }}
        height="100vh"
        flexDirection="column"
        justifyContent="center"
      >
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={3}>
            <Box sx={{ width: "350px" }} component="img" src={img} />
          </Grid>
          <br />
          <Grid>
            <Typography style={{ color: "#FFFFFF", letterSpacing: "3.8px" }}>
              LIFETIME ACCESS PASS FOUND
            </Typography>
          </Grid>
          <br />
          <Grid item xs={3}>
            <Box sx={{ width: "350px" }} component="img" src={img2} />
          </Grid>

          <Grid>
            <Button
              onClick={BuyHandler}
              sx={{
                textTransform: "none",
                color: "#000000",
                "&:hover": {
                  background: "#000000",
                  color: "#FFFFFFCC",
                },
                color: "#000000",
                backgroundColor: "#FFFFFFCC",
                maxWidth: "160px",
                marginTop: "15px",
              }}
              variant="outlined"
            >
              Buy
            </Button>
            <Button
              onClick={renderPage}
              sx={{
                textTransform: "none",
                marginLeft: "10px",
                color: "#000000",
                "&:hover": {
                  background: "#000000",
                  color: "#FFFFFFCC",
                },
                color: "#000000",
                backgroundColor: "#FFFFFFCC",
                maxWidth: "160px",
                marginTop: "15px",
              }}
              variant="outlined"
            >
              Launch The App
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Lanchapp;
