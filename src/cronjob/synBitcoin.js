const bitcoinService = require("../service/BitcoinService.js");
const axios = require("axios");
const {CronJob} = require("cron");
const synBitcoin = async () => {
    try {
        const response = await axios.get("https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT");
        const bitcoin = response.data;
        bitcoin.timeAt = new Date();
        await bitcoinService.save(bitcoin);
        console.log("Bitcoin price synchronization successful")
    } catch (error) {
        console.log(error)
    }
}

const cronjob = new CronJob(
    '* 15 * * *',
    synBitcoin,
    null,
    true,
    'Asia/Ho_Chi_Minh'
);

module.exports = cronjob;