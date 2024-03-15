const Bitcoin = require("../model/Bitcoin.js");

class BitcoinRepository {
    constructor() {
    }

    save = async (newBitcoin) =>  {
        return Bitcoin.create(newBitcoin);
    }

    getLatestBTCData = async () => {
        return Bitcoin.findOne().sort({timeAt: -1}).limit(1);
    }
}

module.exports = new BitcoinRepository();
