const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory(
    "HeartPortal"
  );
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  let waveCount;
  waveCount = await waveContract.getTotalHearts();

  let waveTxn = await waveContract.heart();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalHearts();

  waveTxn = await waveContract.connect(randomPerson).heart();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalHearts();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
