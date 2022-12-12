
const express = require('express');
const router = express.Router()


router.post("/question") // manage questions(admin only)
router.post("/user")  // manage users(admin only)
router.post("/database") // import or export data(admin only)




module.exports = router;