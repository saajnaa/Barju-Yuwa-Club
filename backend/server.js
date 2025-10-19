import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/bd.js';
import getuser from './controllers/user-Controller.js';


const app = express()
dotenv.config();
const PORT = 4000 || process.env.PORT

// database connection//
connectDB()

app.get('/teams', getuser)

app.listen(PORT, () => {


    console.log(`server is running on ${PORT} port `)

})