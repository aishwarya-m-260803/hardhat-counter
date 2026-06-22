const { ethers } = require("hardhat");

async function main() {
  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();
  await counter.waitForDeployment();

  console.log("Initial:", await counter.get());

  await counter.increment();
  console.log("After increment:", await counter.get());

  await counter.decrement();
  console.log("After decrement:", await counter.get());
}

main();