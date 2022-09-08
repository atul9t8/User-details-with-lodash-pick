const express = require("express");
const router = express.Router();
const { userInfo, greet } = require("../controllers/userDetailsController")

router.post('/userInfo', userInfo)
router.get('/', greet)
 
module.exports = router;