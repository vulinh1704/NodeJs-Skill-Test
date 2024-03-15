require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const synBitcoin = require("./src/cronjob/synBitcoin.js");
const bitcoinService = require("./src/service/BitcoinService.js");
const app = express();

mongoose.connect(process.env.DB_URL).then(() => {
    console.log('Database connection successful!');
}).catch((error) => {
    console.log(error.message);
})

synBitcoin().then(() => {
    console.log("BTC price synchronization successful!")
}).catch((err) => {
    console.log(err.message + "__");
});

bitcoinService.getLatestBTCData().then((data) => {
    console.log(data);
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running: ${process.env.SERVER_URL}`)
})



