const userModel = require('../models/user.model')

async function registeruser(req , res) {

    const { username , email , password} = req.body ;

}

module.exports= { registeruser }
