const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.DB_STRING)
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

module.exports = connectDB