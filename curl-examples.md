# Dogecoin Core RPC CURL Examples

🐕 **Such CURL, Much API!** 🚀

This file contains comprehensive CURL examples for interacting with Dogecoin Core via RPC. Such examples, much learning!

## 🔧 Basic Setup

Before using these examples, make sure your Dogecoin Core node is running with RPC enabled:

```bash
# In dogecoin.conf
server=1
rpcuser=your_username
rpcpassword=your_password
rpcport=22555
rpcallowip=127.0.0.1
```

## 📊 Blockchain Information

### Get Blockchain Info
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"getblockchaininfo","params":[]}' \
  http://127.0.0.1:22555/
```

### Get Block Count
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"getblockcount","params":[]}' \
  http://127.0.0.1:22555/
```

### Get Best Block Hash
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"getbestblockhash","params":[]}' \
  http://127.0.0.1:22555/
```

### Get Block by Hash
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"getblock","params":["block_hash"]}' \
  http://127.0.0.1:22555/
```

## 💰 Wallet Operations

### Get Wallet Info
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"getwalletinfo","params":[]}' \
  http://127.0.0.1:22555/
```

### Get Balance
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"getbalance","params":[]}' \
  http://127.0.0.1:22555/
```

### Get New Address
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"getnewaddress","params":["My Address"]}' \
  http://127.0.0.1:22555/
```

### List Addresses
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"getaddressesbylabel","params":[""]}' \
  http://127.0.0.1:22555/
```

## 💸 Transactions

### Send DOGE
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"sendtoaddress","params":["D7Y55vD8n2pwcGpcuVrBAeErVHuum6Quwb", 10.0, "Payment for services", "Such payment!"]}' \
  http://127.0.0.1:22555/
```

### Send to Multiple Addresses
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"sendmany","params":["", {"D7Y55vD8n2pwcGpcuVrBAeErVHuum6Quwb": 5.0, "D8Y66wE9o3qxdHqdvVrCBfFsVHvvn7Rvwc": 5.0}, 1, "Much payments!"]}' \
  http://127.0.0.1:22555/
```

### Get Transaction
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"gettransaction","params":["transaction_id"]}' \
  http://127.0.0.1:22555/
```

### List Transactions
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"listtransactions","params":["*", 10]}' \
  http://127.0.0.1:22555/
```

## 🔧 Raw Transactions

### Create Raw Transaction
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"createrawtransaction","params":[[{"txid":"previous_tx_id", "vout":0}], {"D7Y55vD8n2pwcGpcuVrBAeErVHuum6Quwb": 9.5}]}' \
  http://127.0.0.1:22555/
```

### Sign Raw Transaction
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"signrawtransaction","params":["raw_transaction_hex"]}' \
  http://127.0.0.1:22555/
```

### Send Raw Transaction
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"sendrawtransaction","params":["signed_transaction_hex"]}' \
  http://127.0.0.1:22555/
```

### Decode Raw Transaction
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"decoderawtransaction","params":["raw_transaction_hex"]}' \
  http://127.0.0.1:22555/
```

## 🌐 Network Information

### Get Network Info
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"getnetworkinfo","params":[]}' \
  http://127.0.0.1:22555/
```

### Get Peer Info
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"getpeerinfo","params":[]}' \
  http://127.0.0.1:22555/
```

### Get Connection Count
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"getconnectioncount","params":[]}' \
  http://127.0.0.1:22555/
```

### Get Network Totals
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"getnettotals","params":[]}' \
  http://127.0.0.1:22555/
```

## ⛏️ Mining

### Get Mining Info
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"getmininginfo","params":[]}' \
  http://127.0.0.1:22555/
```

### Generate Blocks (Regtest only)
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"generate","params":[101]}' \
  http://127.0.0.1:22555/
```

### Get Block Template
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"getblocktemplate","params":[{"rules":["segwit"]}]}' \
  http://127.0.0.1:22555/
```

## 💰 Fee Estimation

### Estimate Smart Fee
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"estimatesmartfee","params":[6]}' \
  http://127.0.0.1:22555/
```

### Estimate Fee
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"estimatefee","params":[6]}' \
  http://127.0.0.1:22555/
```

## 🔍 Mempool

### Get Mempool Info
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"getmempoolinfo","params":[]}' \
  http://127.0.0.1:22555/
```

### Get Mempool Contents
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"getrawmempool","params":[]}' \
  http://127.0.0.1:22555/
```

## 🏷️ Labels and Addresses

### Create Multi-Sig Address
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"createmultisig","params":[2, ["pubkey1", "pubkey2", "pubkey3"]]}' \
  http://127.0.0.1:22555/
```

### Add Multi-Sig Address
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"addmultisigaddress","params":[2, ["pubkey1", "pubkey2"]]}' \
  http://127.0.0.1:22555/
```

### Import Address
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"importaddress","params":["D7Y55vD8n2pwcGpcuVrBAeErVHuum6Quwb", "Imported Address", false]}' \
  http://127.0.0.1:22555/
```

## 🔐 Wallet Management

### Encrypt Wallet
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"encryptwallet","params":["your_passphrase"]}' \
  http://127.0.0.1:22555/
```

### Unlock Wallet
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"walletpassphrase","params":["your_passphrase", 60]}' \
  http://127.0.0.1:22555/
```

### Lock Wallet
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"walletlock","params":[]}' \
  http://127.0.0.1:22555/
```

### Change Wallet Passphrase
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"walletpassphrasechange","params":["old_passphrase", "new_passphrase"]}' \
  http://127.0.0.1:22555/
```

## 📊 Utility Functions

### Validate Address
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"validateaddress","params":["D7Y55vD8n2pwcGpcuVrBAeErVHuum6Quwb"]}' \
  http://127.0.0.1:22555/
```

### Get Address Info
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"getaddressinfo","params":["D7Y55vD8n2pwcGpcuVrBAeErVHuum6Quwb"]}' \
  http://127.0.0.1:22555/
```

### Decode Script
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"decodescript","params":["script_hex"]}' \
  http://127.0.0.1:22555/
```

## 🧪 Testnet Examples

For testnet, change the RPC port to 44555:

```bash
# Testnet RPC endpoint
http://127.0.0.1:44555/

# Example: Get testnet blockchain info
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"getblockchaininfo","params":[]}' \
  http://127.0.0.1:44555/
```

## 🔧 Regtest Examples

For regtest, change the RPC port to 18332:

```bash
# Regtest RPC endpoint
http://127.0.0.1:18332/

# Example: Generate blocks on regtest
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"generate","params":[101]}' \
  http://127.0.0.1:18332/
```

## 🚀 Advanced Examples

### Batch Requests
```bash
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '[
    {"jsonrpc":"1.0","id":"1","method":"getblockchaininfo","params":[]},
    {"jsonrpc":"1.0","id":"2","method":"getwalletinfo","params":[]},
    {"jsonrpc":"1.0","id":"3","method":"getnetworkinfo","params":[]}
  ]' \
  http://127.0.0.1:22555/
```

### Using jq for JSON Processing
```bash
# Get block count and format output
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"getblockcount","params":[]}' \
  http://127.0.0.1:22555/ | jq '.result'

# Get balance with formatting
curl -u your_username:your_password \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"1.0","id":"1","method":"getbalance","params":[]}' \
  http://127.0.0.1:22555/ | jq '.result | "Balance: \(.) DOGE"'
```

## 🛡️ Security Notes

1. **Never expose RPC to the public internet**
2. **Use strong passwords for RPC authentication**
3. **Restrict RPC access to specific IP addresses**
4. **Consider using HTTPS for remote connections**
5. **Regularly update your Dogecoin Core software**

## 🐕 Doge Tips

- **Such API:** All RPC methods return JSON responses
- **Much Error:** Check the "error" field in responses
- **So Fast:** Use batch requests for multiple operations
- **Wow Result:** The "result" field contains the actual data

---

**Much CURL, Such API, Wow!** 🚀

*Happy coding with Dogecoin Core!*
