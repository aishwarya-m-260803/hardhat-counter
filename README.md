# 🚀 Hardhat Counter Smart Contract (Sepolia Deployment)

## 📌 Overview

This project demonstrates the complete lifecycle of developing, testing, and deploying a smart contract using the Hardhat framework.

It includes:

* A basic **Counter smart contract**
* Automated **unit testing**
* A **deployment script**
* Deployment to **Ethereum Sepolia Testnet**

---

## 🧠 Features

* Increment, decrement, and reset counter
* Prevents invalid state (no negative values)
* Fully tested using Hardhat test environment
* Deployment using **ethers.js**
* Secure configuration using `.env`

---

## 🛠 Tech Stack

* **Solidity** – Smart contract development
* **Hardhat** – Development & testing framework
* **Ethers.js** – Contract interaction & deployment
* **Alchemy** – RPC provider
* **MetaMask** – Wallet & signing transactions

---

## 📂 Project Structure

```
hardhat-counter/
│── contracts/        # Solidity smart contracts
│── scripts/          # Deployment scripts
│── test/             # Test cases
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

Create a `.env` file:

```
SEPOLIA_URL=your_alchemy_rpc_url
PRIVATE_KEY=your_wallet_private_key
```

> ⚠️ Never commit `.env` to GitHub

---

## 🧪 Run Tests

```bash
npx hardhat test
```

---

## 🚀 Deployment

Deploy to Sepolia testnet:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

---

## 📍 Deployed Contract

**Network:** Ethereum Sepolia
**Contract Address:**

```
0x0425DABAdebC98C572743702c53724d4E1430690
```

🔗 View on Etherscan:
https://sepolia.etherscan.io/address/0x0425DABAdebC98C572743702c53724d4E1430690

---

## 🧠 Key Learnings

* Smart contract development using Solidity
* Writing and running automated tests
* Managing secure configurations using environment variables
* Deploying contracts to a live blockchain testnet
* Understanding blockchain transaction flow

---

## 👩‍💻 Author

**Aishwarya M**

---

## 🤝 Contributions

Feel free to fork this repository and contribute to enhance functionality or improve testing.

---

## ⭐ Final Note

This project represents a foundational step into blockchain development, covering real-world practices such as testing, deployment, and secure configuration.

---
