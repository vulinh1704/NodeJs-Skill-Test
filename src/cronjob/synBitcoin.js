const bitcoinService = require("../service/BitcoinService.js");
const axios = require("axios");
const moment = require("moment-timezone");

const getCurrentDateInGMT7 = () => {
    return moment(new Date()).tz('Asia/Bangkok');
};

const synBitcoin = async () => {
    try {
        const response = await axios.get("https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT");
        const bitcoin = response.data;
        bitcoin.timeAt = getCurrentDateInGMT7();
        console.log(getCurrentDateInGMT7())
        await bitcoinService.save(bitcoin);
    } catch (error) {
        console.log(error)
        throw error;
    }
}
module.exports = synBitcoin;