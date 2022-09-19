// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract HeartPortal {
    uint256 totalHearts;

    constructor() {
        console.log("yeh dil ka mamala hai");
    }


    function heart() public {
        totalHearts += 1;
        console.log('%s has heart at us', msg.sender);
    }

    function getTotalHearts() public view returns (uint256) {
        console.log(' %s  is the total hearts', totalHearts);
        return totalHearts;
    }
}