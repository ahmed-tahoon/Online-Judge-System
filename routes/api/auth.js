const express = require('express');
const router = express.Router()
const {Login} = require("../../Controllers/auth")
const {Register} = require("../../Controllers/auth")
const {Loginadmin} = require("../../Controllers/auth")


router.post("/login",Login)
router.post("/register",Register)
router.post("/loginadmin",Loginadmin)




module.exports = router;