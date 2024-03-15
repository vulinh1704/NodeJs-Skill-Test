const bitcoinRepository = require("../repository/BitcoinRepository.js");

class BitcoinService {
    constructor() {
        this.bitcoinService = bitcoinRepository;
    }

    save = async (newBitcoin) => {
        return this.bitcoinService.save(newBitcoin);
    }

    getLatestBTCData = async () => {
        return this.bitcoinService.getLatestBTCData();
    }
}

module.exports = new BitcoinService();