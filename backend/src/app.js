const dotenv =require('dotenv')
dotenv.config()
const express =require('express')
const app =express()
const cors =require('cors')
const connectDB = require('./db/db')
app.use(cors());
//write now we are listening request from all wbsite as just for tetsing but when a real project than put the domain name in between brackets of  cors(write domain here)

connectDB();


app.get('/home',(req,res)=>{
    res.send("Hello ankur")
})
module.exports =app