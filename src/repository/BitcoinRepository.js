const Bitcoin = require("../model/Bitcoin");

class BitcoinRepository {
    save = async (newBitcoin) => {
        return Bitcoin.create(newBitcoin);
    }
}

export default new BitcoinRepository();
