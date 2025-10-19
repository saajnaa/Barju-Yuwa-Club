import mongoose from "mongoose";
import dotenv from 'dotenv'

const connectDB = () => {

    try {
        mongoose.connect(process.env.mongodb_url, {

            dbName: "Barju-yuwa-club",

        })
        console.log('mongodb connected')

    } catch (error) {
        console.log('mongodb connection error:', error.message)

    }



}

export default connectDB;