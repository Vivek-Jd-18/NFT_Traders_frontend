import React, { useState, useEffect } from 'react'
import Index from '../Index'
import Web3 from 'web3'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { providerOptions } from '../../../utils/providerOptions'
import AbiNFTMarketPlace from '../../../contracts/NFTMarketPlace.json'
import AbiNFTErc721a from '../../../contracts/NFTErc721a.json'
import Contract from "web3-eth-contract"
import { create } from 'ipfs-http-client'

const drawerWidth = 240n
const Main = Index.styled('main', {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  })
}))

const CreateUpdateNft = () => {


  const NFTMarketPlaceAddress = localStorage.getItem("NFTMarketPlaceAddress")
  const NFTErc721aAddress = localStorage.getItem("NFTErc721aAddress")


  // const NFTMarketPlaceAddress = '0x71D473b6e3B0C7809436D7c66141a7483328661b'
  // const NFTErc721aAddress = '0xeA9644dB153759d82Cc15b1fc43048E2725c9f72'

  const [NFTErc721aContract, setNFTErc721aContract] = useState()
  const [NFTMarketPlaceContract, setNFTMarketPlaceContract] = useState()
  const [userAddress, setUserAddress] = useState()
  const [whitelistAllData, setwhitelistAllData] = useState([])
  const [errorMsg, setErrorMsg] = useState("")


  //#region States
  const navigate = Index.useNavigate()
  const params = Index.useParams()
  const [open, setOpen] = useState(true)
  const [nftMinting, setCollection] = useState({
    generate_nft: '0',
    sold_nft_free: '',
    sold_nft_purchase: '',
    website: ''
  })
  const [nftError, nftMintingError] = useState({
    titleError: ''
  })
  const [walletAddress, setWalletAddress] = useState(0)
  const [tokenUrl, setTokenUrl] = useState(`www.nft.com/nfts/1`)

  const [tknAmount, setTknAmount] = useState(0)
  const [addressWhite, setAddressWhite] = useState("")
  // #endregion
  const [providerForContracts, setProviderForContracts] = useState(null)
  //#region Methods


  //token uri  stuff
  const projectId = '2EydPKGqmXcXAKly2TBkdObNCHk';
  const projectSecret = '658bddb4241f2bdcd3a9073955dd9fd6';
  const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
  const ipfs = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
      authorization: auth,
    },
  });

  const createMetadataForNFT = async (
    name,
    description,
    image,
    price,
    id
  ) => {
    const type = "NFT";
    const data = JSON.stringify({
      name,
      description,
      image,
      type,
      price,
      id
    });
    try {
      const addedFile = await ipfs.add(data);
      console.log(addedFile, "dar123");
      const ipfsUrl = `https://infura-ipfs.io/ipfs/${addedFile.path}`;
      // const ipfsUrl = `https://ipfs.infura.io/ipfs/132131311`;
      // createMarketForSale(ipfsUrl)
      return ipfsUrl;
    } catch (e) {
      console.log(e);
    }
  };



  const handleInputChange = event => {
    setTknAmount(event.target.value)
    setCollection({
      ...nftMinting,
      [event.target.name]: event.target.value
    })
  }



  const connetAccount = async () => {
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
    setUserAddress(account)

    console.log('starting...', account)

    const tempNFTErc721aContract = new web3.eth.Contract(
      AbiNFTErc721a.abi,
      NFTErc721aAddress
    )
    setNFTErc721aContract(tempNFTErc721aContract)
    console.log("-=-=-=-=tempNFTErc721aContract-=-=-=-=-", tempNFTErc721aContract);

    const tempNFTMarketPlaceContract = new web3.eth.Contract(
      AbiNFTMarketPlace.abi,
      NFTMarketPlaceAddress
    )
    setNFTMarketPlaceContract(tempNFTMarketPlaceContract)
    console.log("-=-=-=-=tempNFTMarketPlaceContract-=-=-=-=-", tempNFTErc721aContract);

    //web3Function => renders all ahitelisted addresses getAll()
    const getAll = await tempNFTMarketPlaceContract.methods.getAll().call()
    setwhitelistAllData(getAll)


    //getting network id and NetworkType
    web3.eth.net.getNetworkType()
      .then(console.log);

    var dt = web3.eth.net.getId().then(netId => { return netId })
    console.log("data======", await dt);

    //dummy code to check network id of contract
    Contract.setProvider('wss://eth-goerli.g.alchemy.com/v2/EgKFc0hjM9FTYsiEkRj8RxchmQc0YoDK');

    var contractMarket = new Contract(AbiNFTMarketPlace.abi, NFTMarketPlaceAddress);
    var contract721 = new Contract(AbiNFTErc721a.abi, NFTErc721aAddress);

    console.log("market chain", contractMarket.defaultChain);
    console.log("721 chain", contract721.chainId);
  }


  const generateNft = async () => {
    connetAccount()
    // meta data attributes-->
    //1) name,
    //2) description,
    //3) image,
    //4) finalprice,
    //5) id
    const url = await createMetadataForNFT(
      "NFTrader",
      "NFT1 desc",
      "https://firebasestorage.googleapis.com/v0/b/abcd-a3b4f.appspot.com/o/Version%201.0%20(1).gif?alt=media&token=7ce3a1b9-9719-4a2a-ba92-7cf2e7ecbb94",
      "100",
      "1"
    );

    if (tknAmount > 0) {
      setErrorMsg("")
      //web3Function => token mint function 
      const createTokenResult = await NFTErc721aContract.methods
        .mintNFTToken(NFTMarketPlaceAddress, tknAmount, 0x00, url)
        .send({ from: userAddress })
      console.log('createTokenResult==', createTokenResult)

      // for(let i = 7 ;i<12;i++){
      const setTokenURI = await NFTErc721aContract.methods.setTokenURI(15, url)
        .send({ from: userAddress })
      console.log('setTokenURI==', setTokenURI)
      // }

    } else {
      setErrorMsg("amount should be greater than '0'")
    }

    //web3Function => renders all ahitelisted addresses getAll()
    const getAll = await NFTMarketPlaceContract.methods.getAll().call()
    setwhitelistAllData(getAll)
    console.log('getAll ===', await getAll)

  }



  const AddToWhiteListHandler = async () => {
    connetAccount();

    //web3Function => 1.addUser()
    const addUserRes = await NFTMarketPlaceContract.methods
      .set(addressWhite)
      .send({ from: userAddress })
    console.log('addUserRes ===', await addUserRes)

    //web3Function => 2.getAll()
    const getAll = await NFTMarketPlaceContract.methods
      .getAll().call()
    console.log('getAll ===', await getAll)
  }

  const RemoveFromWhiteListHandler = async () => {
    connetAccount();
    //web3Function => 1.remove()
    const remove = await NFTMarketPlaceContract.methods
      .remove(addressWhite)
      .send({ from: userAddress })
    console.log('remove ===', await remove)

    //web3Function => 2.getAll()
    const getAll = await NFTMarketPlaceContract.methods
      .getAll().call()
    console.log('getAll ===', await getAll)
  }

  const SubmitHandler = async () => {
    let formData = new FormData()
    let msg = ''
    if (params.id) {
      formData.append('id', params.id)
      msg = 'Collection updated successfully'
    } else {
      msg = 'Collection created successfully'
    }

    formData.append('generate_nft', nftMinting?.generate_nft.trim())
    formData.append('sold_nft_free', nftMinting?.sold_nft_free.trim())
    formData.append('sold_nft_purchase', nftMinting?.sold_nft_purchase.trim())
    formData.append('website', nftMinting?.website.trim())

    await Index.DataService.post(
      Index.Api.Admin.CollectionCreate,
      formData
    ).then(data => {
      if (data.data.status === 1) {
        Index.toast.success(msg, { theme: 'dark' })
        navigate('/admin/nftMintingList')
      }
    })
  }
  const Validation = e => {
    console.log('nftMinting.generate_nft', nftMinting.generate_nft)
    connetAccount()

    e.preventDefault()
    // if (Index.validator.isEmpty(nftMinting.title, { ignore_whitespace: true })) {
    //   nftMintingError((prevState) => ({
    //     titleError: "Please enter the title.",
    //   }));
    // } else {
    //   nftMintingError((prevState) => ({
    //     ...prevState,
    //     titleError: "",
    //   }));

    //   // SubmitHandler();
    // }
  }
  const getCollection = async () => {
    if (params.id) {
      let urlencoded = new URLSearchParams()
      urlencoded.append('id', params.id)
      const list = await Index.DataService.post(
        Index.Api.Admin.CollectionById,
        urlencoded
      )
      setCollection(list.data.data)
    }
  }
  useEffect(() => {
    getCollection()
    setWalletAddress(localStorage.getItem("userWalletAddress"))
  }, [params.id, AddToWhiteListHandler])

  // #endregion



  return (
    <>
      <Main open={open}>
        <Index.Container maxWidth='false'>
          <Index.Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justify='center'
            display='flex'
          >
            <Index.Grid container spacing={2}>
              <Index.Grid item xs={12} md={12}>
                <Index.Typography variant='h5' noWrap component='div'>
                  NFT Minting
                </Index.Typography>
              </Index.Grid>
              <br />
              <br />
              <Index.Grid item xs={12} md={6}>
                <Index.TextField
                  sx={{ m: 0.5 }}
                  fullWidth
                  type='number'
                  className='text-size-input'
                  name='generate_nft'
                  value={nftMinting?.generate_nft}
                  onChange={handleInputChange}
                  label='No of NFTs'
                  InputLabelProps={{ shrink: true }}
                />
                <span style={{ color: 'red' }}>{nftError.titleError}</span>
              </Index.Grid>
              <span>{errorMsg}</span>
              <Index.Grid item xs={12} md={6}></Index.Grid>
              <Index.Grid item xs={12} md={6} mt={3}>
                <Index.TextField
                  sx={{ my: 2.5 }}
                  fullWidth
                  type='text'
                  className='text-size-input'
                  name='generate_nft'
                  onChange={(e) => { setTokenUrl(e.target.value) }}
                  label='set Token Url'
                  InputLabelProps={{ shrink: true }}
                  placeholder="put an address here"
                />
              </Index.Grid>

              <Index.Grid item xs={12} md={12} mt={3}>
                <Index.Button
                  variant='contained'
                  type='submit'
                  onClick={generateNft}
                  sx={{ backgroundColor: '#39A6FE' }}
                >
                  Generate
                </Index.Button>


                <Index.Grid item xs={12} md={6} mt={3}>
                  <Index.TextField
                    sx={{ my: 2.5 }}
                    fullWidth
                    type='text'
                    className='text-size-input'
                    name='generate_nft'
                    onChange={(e) => { setAddressWhite(e.target.value) }}
                    label='Add-To/Remove-From  whiteList'
                    InputLabelProps={{ shrink: true }}
                    placeholder="put an address here"
                  />
                </Index.Grid>

                {/* <input type="text" sx={{ marginLeft: '20px' }} onChange={(e) => { setAddressWhite(e.target.value) }}>
                </input> */}
                <Index.Grid item xs={12} md={12} mt={3}>
                  <Index.Button mt={3}
                    variant='contained'
                    type='submit'
                    onClick={AddToWhiteListHandler}
                    sx={{ backgroundColor: '#39A6FE', marginLeft: '0px' }}
                  >
                    Add To whiteList
                  </Index.Button>
                  <Index.Button
                    variant='contained'
                    type='submit'
                    onClick={RemoveFromWhiteListHandler}
                    sx={{ backgroundColor: '#39A6FE', marginLeft: '20px' }}
                  >
                    Remove From whiteList
                  </Index.Button>
                </Index.Grid>
              </Index.Grid>
            </Index.Grid>

          </Index.Grid>
        </Index.Container>
        {whitelistAllData.map((element) => (
          <h3>{element}</h3>
        ))}
      </Main>
    </>
  )
}
export default CreateUpdateNft