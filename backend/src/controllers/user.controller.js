const userModel =require('../models/user.model.js')
const userService =require('../services/user.service')
const {validationResult}=require('express-validator')
const blacklistToken = require('../models/blacklistToken.model.js')
 module.exports.registerUser = async( req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});

    }
    console.log(errors.array(),"shows errors")
    console.log("Request Body:", req.body);
const{fullname,email,password}=req.body;
const hashedPassword = await userModel.hashPassword(password);

const user = await userService.createUser({
    firstname:fullname.firstname,
    lastname:fullname.lastname,
    email,
    password:hashedPassword
});
console.log("Created User:", user); 
const token =user.generateAuthToken();
res.status(201).json({token,user});
}
module.exports.loginUser=async(req,res,next)=>{
    const errors =validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});

    }
    const {email,password}=req.body
    const user =await userModel.findOne({email}).select("+password");//.select('+password') is added because in user model we have written select false so due to thaat it will not send our password through database so we will not be able to compare our passsword in below function
    if(!user){
        throw res.status(401).json({message:' user not found'})
    }
    const isPasswordCorrect= await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw res.status(401).json({message:'password is incorrect'})
    }
const token = await user.generateAuthToken()
res.cookie("token",token);
return res.status(201)
    .json({token,user})

}
module.exports.userProfile= async(req,res,next)=>{
return res.status(201).json(req.user)
}
module.exports.logoutUser= async(req,res,next)=>{
res.clearCookie('token')
const token =req.cookies?.token|| req.headers.authorization?.split(' ')[ 1 ];
await blacklistToken.create({token})
return res.status(201).json({ message: 'Logged out'  })
}
