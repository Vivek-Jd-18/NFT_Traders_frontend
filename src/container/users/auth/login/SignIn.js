import React, { useState } from 'react'
import { Box, styled, useTheme } from '@mui/system'
import { ethers } from 'ethers'
import img from '../../../../assets/images/icon-N.png'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { providerOptions } from '../../../../utils/providerOptions'
import Web3 from 'web3'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import CoinbaseWalletSDK from '@coinbase/wallet-sdk'
import AbiNFTMarketPlace from '../../../../contracts/NFTMarketPlace.json'
import AbiNFTErc721a from '../../../../contracts/NFTErc721a.json'
import parseJSON from 'date-fns/esm/fp/parseJSON/index.js'
import stringify from 'json-stringify-safe'

const SignIn = () => {
  const [data, setdata] = useState({
    address: '',
    Balance: null
  })

  const [providerForContracts, setProviderForContracts] = useState(null)
  const [NFTErc721aContract, setNFTErc721aContract] = useState()
  const [NFTMarketPlaceContract, setNFTMarketPlaceContract] = useState()
  const [currentAccount, setCurrentAccount] = useState()

  const navigate = useNavigate()

  const NFTMarketPlaceAddress = '0x71D473b6e3B0C7809436D7c66141a7483328661b'
  const NFTErc721aAddress = '0xeA9644dB153759d82Cc15b1fc43048E2725c9f72'

  localStorage.setItem("NFTMarketPlaceAddress", NFTMarketPlaceAddress)
  localStorage.setItem("NFTErc721aAddress", NFTErc721aAddress)

  // Button handler button for handling a
  // request event for metamask

  const btnhandler = async () => {
    const web3Modal = new Web3Modal({
      network: 'polygonMumbai',
      theme: 'dark',
      // cacheProvider: true,
      providerOptions
    })
    
    var provider = await web3Modal.connect()
    setProviderForContracts(provider)
    var web3 = new Web3(provider)
    var accounts = await web3.eth.getAccounts()
    console.log('starting...');
    const account = accounts[0]
    console.log('account...',account);
    // setUserAddress(account)
    localStorage.setItem("web3", web3);

    const tempNFTMarketPlaceContract = new web3.eth.Contract(
      AbiNFTMarketPlace.abi,
      NFTMarketPlaceAddress
    )


    setNFTMarketPlaceContract(tempNFTMarketPlaceContract)
    localStorage.setItem("MarketPlaceContract", tempNFTMarketPlaceContract);
    const tempNFTErc721aContract = new web3.eth.Contract(
      AbiNFTErc721a.abi,
      NFTErc721aAddress
    )
    console.log("original--", tempNFTErc721aContract);
    setNFTErc721aContract(tempNFTErc721aContract)

    const TotalSupplyResult = await tempNFTErc721aContract.methods
      .getTotalSupply()
      .call()
    console.log('TotalSupplyResult1 ===', TotalSupplyResult)

    await provider.send('eth_requestAccounts')
    // Asking if metamask is already present or not
    if (window.ethereum) {
      await window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((res) => {
          accountChangeHandler(res[0]);
          localStorage.setItem("userWalletAddress", res[0]);
          localStorage.setItem("Address", res[0]);
        }
        )
    } else {
      alert('install metamask extension!!')
    }
  }

  const disconnectwallet = async () => {
    const web3Modal = new Web3Modal({
      network: 'polygonMumbai',
      theme: 'dark',
      providerOptions
    })
    await web3Modal.clearCachedProvider()
    console.log('acc')
  }

  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = address => {
    // Requesting balance method
    window.ethereum
      .request({
        method: 'eth_getBalance',
        params: [address, 'latest']
      })
      .then(balance => {
        // Setting balance
        setdata({
          Balance: ethers.utils.formatEther(balance)
        })
      })
  }

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account
    })
    setCurrentAccount(account)

    // Setting a balance
    getbalance(account)
  }

  if (data.Balance !== null && data.address !== '') {
    navigate('/users/launchapp')
  }

  return (
    <>
      <Box
        sx={{ backgroundColor: '#03070C' }}
        height='100vh'
        flexDirection='column'
        justifyContent='center'
      >
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
          style={{ minHeight: '100vh' }}
        >
          <Grid item xs={3}>
            <Box sx={{ width: '350px' }} component='img' src={img} />
          </Grid>
          <Grid>
            <Button
              onClick={btnhandler}
              sx={{
                textTransform: 'none',
                color: '#000000',
                '&:hover': {
                  background: '#000000',
                  color: '#FFFFFFCC'
                },
                backgroundColor: '#FFFFFFCC',
                maxWidth: '160px',
                marginTop: '15px'
              }}
              variant='outlined'
            >
              Connect
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
export default SignIn
