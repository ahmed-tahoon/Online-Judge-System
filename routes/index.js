const router = require('express').Router();
const { application } = require('express');
const auth = require('./api/auth')
const admin = require('./api/admin')
const submit = require('./api/submit')
const question = require('./api/question')
// api routes

router.get('/',(req,res)=>{
    res.send("<h1>Hello API work</h1>") 
})  //api root, test if the RESTful API is working


router.use('/api/auth',auth) // sign up, login, change password

router.use('/api/admin',admin) // manage questions , users , data 

router.use('/api/submit',submit) //submit solution


router.use('/api/questions',question) //submit solution


module.exports = router;