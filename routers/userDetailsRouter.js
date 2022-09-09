const express = require("express");
const router = express.Router();
const { userInfo, greet } = require("../controllers/userDetailsController")

router.post('/userInfo', userInfo)
 
module.exports = router;