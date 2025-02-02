const mongoose = require('mongoose')
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')
const userSchema =new mongoose.Schema(
    {
    fullName:{
        firstName:{
            type:String,
            required:true,
            minLength:[3,"First Name should be atleast of 3 length"]
        },
        lastName:{
            type:String,

        }
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        select:false //means when we find the user due to it password will not be sent to user 
    },
    socketId:{
        type:String //will be  used to track user live location
    }
    },{timestamps:true}
)
userSchema.methods.generateAuthToken=function(){
    return jwt.sign(
        {
            _id:this._id
        },
        process.env.JWT_SECRET
    )
}
userSchema.methods.comparePassword= async function (password){
   return await  bcrypt.compare(password,this.password )
}
userSchema.statics.hashpassword =async function(){
    return await bcrypt.hash(password,10)
}
const userModel=mongoose.model(user,userSchema)
module.exports =userModel
