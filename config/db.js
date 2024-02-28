const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config();
const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB Database`.bgMagenta.white);
    } catch(error){
        console.log(`Error in MongoDB ${error}`.bgRed.white);
    }
}

module.exports = connectDB;