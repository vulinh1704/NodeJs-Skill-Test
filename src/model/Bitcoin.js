const {Schema, model} = require('mongoose');
const {Double, Long} = require("mongodb");

const BitcoinSchema = new Schema({
    mins: Number,
    price: String,
    closeTime: Number,
    timeAt: Date
});

const Bitcoin = model('Bitcoin', BitcoinSchema);

module.exports = Bitcoin;
