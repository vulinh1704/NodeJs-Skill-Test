const {Router} = require("express");
const bitcoinController = require("../controller/BitcoinController.js")

const router = Router();
router.get("/api/btc", bitcoinController.getBitcoin);

module.exports = router;