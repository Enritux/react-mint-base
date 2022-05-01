const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const MyContract = await hre.ethers.getContractFactory("MyContract");
  const mycontract = await MyContract.deploy();

  await mycontract.deployed();

  console.log("MyContract deployed to:", mycontract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
