const express = require('express')
const authRoutes = require('./routes/auth.routes')  // function API name logic in controller file
const cookieParser = require('cookie-parser') //cookie package installed "cookie-parser"
const app = express() ;

app.use(express.json())    // express middlewarw (Default)
app.use(cookieParser())    //cookie middleware

app.use('/api/auth' , authRoutes)   //main API 


module.exports=app 