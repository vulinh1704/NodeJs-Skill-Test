const BitcoinRepository = import("../repository/BitcoinRepository");

class BitcoinService {
    constructor() {
        this.bitcoinService = new BitcoinRepository();
    }

    save = async (newBitcoin) => {
        return this.bitcoinService.save(newBitcoin);
    }
}

export default new BitcoinService();