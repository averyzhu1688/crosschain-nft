//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {MyToken} from "./MyToken.sol";

contract WrappedNFT is MyToken {
    constructor(string memory tokenName, string memory tokenSymbol) 
    MyToken(tokenName, tokenSymbol) {
        //nothing to do
    }

    //封装一个mint 函数
    function mintWithSpecificTokenId(address to, uint256 _tokenId) public {
        _safeMint(to, _tokenId);
    }
}