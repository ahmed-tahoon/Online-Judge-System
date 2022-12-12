
const express = require('express');
const router = express.Router()
const {submission_run , getSubmitionAll} = require('../../controllers/submission')
const auth  =require('../../middleware/auth')
// questions

router.post("/run",submission_run);
router.get('/submitions/:filter',auth,getSubmitionAll )



module.exports = router;