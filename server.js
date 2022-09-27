const express = require ('express')
const app = express();
const connectDB = require('./db/db')

//connnect Mongo DB to the Express app 
connectDB();


//listen for requests
app.listen(process.env.port ||5000, function() {
    console.log('Server is now listening for requests')
})