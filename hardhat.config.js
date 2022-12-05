require("@nomicfoundation/hardhat-toolbox");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  sources: "./contracts",
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337 // We set 1337 to make interacting with MetaMask simpler
    },
    goerli: {
      // url: "https://eth-goerli.alchemyapi.io/v2/amb7pP8KcyMJbE8U29p20EnujotCOK0Y",
      url: "https://eth-goerli.g.alchemy.com/v2/amb7pP8KcyMJbE8U29p20EnujotCOK0Y",
      accounts: ['0x06cd74d3dca4598675625a8d857f879566dae582b796473b9a5e8c33c58a9074']
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};
