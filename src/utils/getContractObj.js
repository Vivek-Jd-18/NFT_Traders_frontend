import React from 'react'
import stringify from 'json-stringify-safe'

export const getContractObj = () => {
    localStorage.getItem("web3");

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
    return ({tempNFTMarketPlaceContract,tempNFTErc721aContract})
}
