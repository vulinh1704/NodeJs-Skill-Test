require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cronjob = require("./src/cronjob/synBitcoin.js");
const bitcoinService = require("./src/service/BitcoinService.js");
const router = require("./src/router/router.js");
const app = express();

mongoose.connect(process.env.DB_URL).then(() => {
    console.log('Database connection successful!');
}).catch((error) => {
    console.log(error.message);
})

app.use('', router)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running: ${process.env.SERVER_URL}`)
})



