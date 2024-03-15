const bitcoinService = require("../service/BitcoinService.js");
const axios = require("axios");

const synBitcoin = async () => {
    try {
        const response = await axios.get("https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT");
        const bitcoin = response.data;
        bitcoin.timeAt = new Date();
        await bitcoinService.save(bitcoin);
    } catch (error) {
        throw error;
    }
}
module.exports = synBitcoin;