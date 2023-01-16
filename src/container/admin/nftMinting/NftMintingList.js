import React, { useEffect, useState } from 'react'
import Index from '../Index'
import NftMinting from './NftMinting'
import NftUsers from './NftUsers'
import AbiNFTMarketPlace from '../../../contracts/NFTMarketPlace.json'
import AbiNFTErc721a from '../../../contracts/NFTErc721a.json'
import Web3 from 'web3'
import Web3Modal from 'web3modal'
import { providerOptions } from '../../../utils/providerOptions'

function TabPanel (props) {
  const { children, value, index, ...other } = props
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Index.Box sx={{ p: 3 }}>
          <Index.Typography>{children}</Index.Typography>
        </Index.Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: Index.PropTypes.node,
  index: Index.PropTypes.number.isRequired,
  value: Index.PropTypes.number.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const NftMintingList = () => {

  // web3 conneectivity
  const [totalMinted, setTotalMinted] = useState(0)
  const [unSold, setUnSold] = useState(0)
  const [sold, setSold] = useState(0)
  const [usersNFT, setUsersNft] = useState(0)
  const [freeNftsPurcahed, setFreeNftsPurcahed] = useState(0)
  const [paidNftsPurcahed, setPaidNftsPurcahed] = useState(0)

  //contracts addresses
  const NFTMarketPlaceAddress = localStorage.getItem("NFTMarketPlaceAddress")
  const NFTErc721aAddress = localStorage.getItem("NFTErc721aAddress")

  // const NFTMarketPlaceAddress = '0x71D473b6e3B0C7809436D7c66141a7483328661b'
  // const NFTErc721aAddress = '0xeA9644dB153759d82Cc15b1fc43048E2725c9f72'

  console.log("starting app...")
  const connetAccount = async () => {
    const web3Modal = new Web3Modal({
      network: 'polygonMumbai',
      theme: 'dark',
      cacheProvider: true,
      providerOptions
    })

    var provider = await web3Modal.connect()
    var web3 = new Web3(provider)
    var accounts = await web3.eth.getAccounts()
    const account = accounts[0]

    console.log("user's Account address...", account)

    //created object for NFTErc721aContract
    const tempNFTErc721aContract = new web3.eth.Contract(
      AbiNFTErc721a.abi,
      NFTErc721aAddress
    )
    console.log("tempNFTErc721aContract====", tempNFTErc721aContract)

    //created object for NFTMarketPlaceContract
    const tempNFTMarketPlaceContract = new web3.eth.Contract(
      AbiNFTMarketPlace.abi,
      NFTMarketPlaceAddress
    )
    console.log("tempNFTMarketPlaceContract====", tempNFTMarketPlaceContract)
    //new functions
    // TotalSupplyResult, fetchMyNFTs, getSoldNFTCount, getFreeNFTPurchased, getPaidNFTPurchased, getAllUnsoldNFT

    const TotalSupplyResult = await tempNFTErc721aContract.methods.getTotalSupply().call()
    setTotalMinted(await TotalSupplyResult)

    const getSoldNFTCountResult = await tempNFTMarketPlaceContract.methods.getSoldNFTCount().call()
    setSold(await getSoldNFTCountResult)

    const fetchMyNFTs = await tempNFTMarketPlaceContract.methods.fetchMyNFTs(account).call();
    setUsersNft(fetchMyNFTs.length)

    const getFreeNFTPurchased = await tempNFTMarketPlaceContract.methods.getFreeNFTPurchased().call();
    setFreeNftsPurcahed(await getFreeNFTPurchased.length)

    const getPaidNFTPurchased = await tempNFTMarketPlaceContract.methods.getPaidNFTPurchased().call();
    setPaidNftsPurcahed(await getPaidNFTPurchased.length)


    for (let i = 0; i <= 15; i++) {
      const ownerOf = await tempNFTErc721aContract.methods.ownerOf(i).call();
      console.log(`owner of ${i} is `, await ownerOf)
    }

  }
  //
  const unsold = totalMinted - sold;

  //#region States
  const navigate = Index.useNavigate()
  const [value, setValue] = React.useState(0)
  // #endregion

  //#region Methods
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  // #endregion
  useEffect(() => {
    console.log('Address:', localStorage.getItem('Address'))
    connetAccount()
  }, [])

  return (
    <>
      <Index.Container maxWidth='false'>
        <Index.Grid container justify='flex-end'>
          <Index.Grid item xs>
            <Index.Typography
              sx={{ margin: '22px 22px 22px 0px' }}
              variant='h5'
              noWrap
              component='div'
            >
              NFT Minting
            </Index.Typography>
          </Index.Grid>
          <Index.Grid>
            <Index.Button
              sx={{ margin: '22px 22px 22px 0px' }}
              variant='contained'
              onClick={() => {
                navigate('/admin/nftMinting')
              }}
            >
              Generate NFT
            </Index.Button>
          </Index.Grid>
        </Index.Grid>
        <Index.Grid container>
          <br />
          <strong>Total NFT Minted: </strong> {totalMinted} | &nbsp;
          <strong>NFT Sold:</strong> {sold} | &nbsp;
          <strong>Unsold NFT:</strong> {unsold} | &nbsp;
          <strong>usersNFT:</strong> {usersNFT} | &nbsp;
          <strong>freeNftsPurcahed:</strong> {freeNftsPurcahed} | &nbsp;
          <strong>paidNftsPurcahed:</strong> {paidNftsPurcahed} | &nbsp;
          <br />
        </Index.Grid>

        <Index.TableContainer component={Index.Paper}>
          {/* Tab Section */}
          <Index.Box sx={{ width: '100%' }}>
            <Index.Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Index.Tabs
                value={value}
                onChange={handleChange}
                aria-label='basic tabs example'
              >
                <Index.Tab label='NFT Minting' {...a11yProps(0)} />
                <Index.Tab label='NFT User List' {...a11yProps(1)} />
              </Index.Tabs>
            </Index.Box>
            <TabPanel value={value} index={0}>
              <NftMinting /> {/* Call Nft minting file */}
            </TabPanel>
            <TabPanel value={value} index={1}>
              <NftUsers /> {/* Call Nft user list file */}
            </TabPanel>
          </Index.Box>
          {/* End Tab Section */}
        </Index.TableContainer>
      </Index.Container>
    </>
  )
}
export default NftMintingList
