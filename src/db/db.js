const mongoose = require('mongoose')

async function connectDB() {
    
try{
   await mongoose.connect( process.env.MONGOOSE_URI)
   console.log('Database Connected Successfully !!!');
}
catch(err) {
    console.log('Database connection error:', err );
}}

module.exports=connectDB 