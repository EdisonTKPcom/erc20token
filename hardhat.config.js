// require("@nomiclabs/hardhat-waffle");

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// // You need to export an object to set up your config
// // Go to https://hardhat.org/config/ to learn more

// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
// module.exports = {
//   solidity: "0.8.4",
// };
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    // rinkeby: {
    //   url: `https://rinkeby.infura.io/v3/`,
    //   accounts: [`0x${process.env.RINKEBY_PRIVATE_KEY}`],
    //   // accounts: [`0x8Be85FC9E83c70ba22F37D17C2FEB14A761D9D2e`],
    // },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/PYJfHS8hL1y5hV4ZQjm-pA7Aa6IeMYdt`,
      accounts: [
        `48fcedda8ab4f154f84123c2582c47a36b20db6d2a9282faa4a3f89d0070db4f`,
      ],
    },
  },
};
