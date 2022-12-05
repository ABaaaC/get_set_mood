//SPDX-License-Identifier: UNLICENSED

// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.9;

contract Mood {
    string mood;

    //create a function that writes a mood to the smart contract
    function setMood(string memory _mood) public {
        mood = _mood;
    }

    //create a function the reads the mood from the smart contract
    function getMood() public view returns (string memory) {
        return mood;
    }
}
