const bitcoinService = require("../service/BitcoinService.js");

class BitcoinController {
    constructor() {
        this.bitcoinService = bitcoinService;
    }

    getBitcoin = async (req, res) => {
        let bitcoin = await this.bitcoinService.getLatestBTCData();
        bitcoin = {
            mins: bitcoin.mins,
            price: bitcoin.price,
            closeTime: bitcoin.closeTime,
            timeAt: bitcoin.timeAt
        }
        return res.status(200).json(bitcoin);
    }
}

module.exports = new BitcoinController();