const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:Cimmy355@laurensclarascowsmilk.eynlunq.mongodb.net/?retryWrites=true&w=majority');
        
        console.log('db connection success!');
    } catch (err) {
        console.log(err);
    }
}


module.exports = connectDB;