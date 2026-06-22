# 🚀 Hardhat Counter Smart Contract (Sepolia Deployment)

## 📌 Overview

This project demonstrates an end-to-end smart contract development workflow using the Hardhat framework, covering contract creation, testing, deployment, verification, and on-chain interaction.

It includes:

* A Solidity-based **Counter smart contract**
* Automated **unit testing with Mocha & Chai**
* A **deployment script using ethers.js**
* Deployment and verification on **Ethereum Sepolia Testnet**
* Live **on-chain interaction via Etherscan**

---

## 🧠 Features

* Increment, decrement, and reset counter state
* Prevents invalid operations (no negative values)
* Fully tested smart contract logic
* Deployment to a public blockchain testnet
* Verified contract with public source code on Etherscan
* Secure handling of credentials using environment variables

---

## 🛠 Tech Stack

* **Solidity** – Smart contract development
* **Hardhat** – Development, testing & deployment
* **Ethers.js** – Blockchain interaction
* **Alchemy** – RPC provider
* **MetaMask** – Wallet integration & transaction signing
* **Mocha & Chai** – Testing framework

---

## 📂 Project Structure

```
hardhat-counter/
│── contracts/        # Solidity smart contracts
│── scripts/          # Deployment scripts
│── test/             # Unit test cases
│── hardhat.config.js # Hardhat configuration
│── .env              # Environment variables (ignored)
```

---

## ⚙️ Setup & Installation

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```
SEPOLIA_URL=your_alchemy_rpc_url
PRIVATE_KEY=your_wallet_private_key
ETHERSCAN_API_KEY=your_etherscan_api_key
```

> ⚠️ Never commit `.env` to version control. Sensitive data is excluded via `.gitignore`.

---

## 🧪 Run Tests

```bash
npx hardhat test
```

---

## 🚀 Deployment

Deploy the contract to Sepolia testnet:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

---

## 🔍 Contract Verification

Verify the deployed contract on Etherscan:

```bash
npx hardhat verify --network sepolia <DEPLOYED_CONTRACT_ADDRESS>
```

---

## 🔗 Deployed Contract

* **Network:** Ethereum Sepolia Testnet
* **Contract Address:**

```
0x0425DABAdebC98C572743702c53724d4E1430690
```

👉 View on Etherscan:
https://sepolia.etherscan.io/address/0x0425DABAdebC98C572743702c53724d4E1430690

---

## ⚡ Interaction

After verification, the contract can be interacted with directly via Etherscan:

* **Read Functions:** Retrieve current counter value
* **Write Functions:** Execute `increment`, `decrement`, `reset`
* Transactions are signed using MetaMask and executed on-chain

---

## 🧠 Key Learnings

* Smart contract design and development using Solidity
* Writing and executing automated tests
* Secure configuration using environment variables
* Deployment and verification on Ethereum testnet
* Understanding blockchain transactions and gas usage
* Interacting with smart contracts via UI and programmatically

---

## 👩‍💻 Author

**Aishwarya M**

---

## 🤝 Contributions

Contributions are welcome! Feel free to fork the repository and submit pull requests.

---

## ⭐ Final Note

This project represents a complete beginner-to-intermediate level blockchain workflow and demonstrates practical experience with real-world development tools and deployment practices in Web3.

---
