const express =require('express');
const authController = require('../controllers/auth.controller')
const router = express.Router();

router.post('/register' , authController.registeruser )

router.get('/test', (req , res)=>{

    console.log("cookies:" , req.cookies)
    res.json({
        message : "test-cookie",
        cookies : req.cookies
    })

})

module.exports=router ; 