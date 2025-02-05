const dotenv =require('dotenv')
dotenv.config()
const express =require('express')
const app =express()
const cookieParser =require('cookie-parser')
const cors =require('cors')
const connectDB = require('./db/db')
const userRoutes =require('../src/routes/user.routes.js')
const captainRoutes =require('../src/routes/captain.routes.js')
app.use(cors());//write now we are listening request from all wbsite as just for tetsing but when a real project than put the domain name in between brackets of  cors(write domain here)
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Optional but useful for form data
app.use(cookieParser())


connectDB();


app.get('/home',(req,res)=>{
    res.send("Hello ankur")
})
app.use('/users',userRoutes)
app.use('/captain',captainRoutes)
module.exports =app