// @dev do remember to change the amount limit so that the transactions can take place. Also manually change the types from string to number or bool whereever necessary in the abi.
// "amountLimit": [{
//     "token": "iost",
//     "val": "10"
// }]

class FundMe {
    init() {
        storage.put("totalFunds", JSON.stringify(0))
        storage.put("owner", tx.publisher)

    }

    fundme(iost) {
        blockchain.deposit(tx.publisher, iost, "This is my best wishes to you")
        storage.put("totalFunds", JSON.stringify(JSON.parse(storage.get("totalFunds")) + iost))
    }

    getTotalFunds() {
        return storage.get("totalFunds")
    }

    withdrawFunds() {
        if (tx.publisher != storage.get("owner")) {
            throw new Error("Only owner can run this function")
        }
        else {
            blockchain.withdraw(tx.publisher, storage.get("totalFunds"), "this is memo")
            storage.put("totalFunds", JSON.stringify(0))
        }
    }

}



module.exports = FundMe;