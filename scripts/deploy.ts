const mymain = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const waveContractFactory = await hre.ethers.getContractFactory(
    "HeartPortal"
  );
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("HeartPortal address: ", waveContract.address);
};

const runMyMain = async () => {
  try {
    await mymain();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMyMain();
