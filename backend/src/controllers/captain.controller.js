const blacklistTokenModel = require('../models/blacklistToken.model.js')
const captainModel = require('../models/captain.model.js')
const captainService =require('../services/captain.service.js')
const {validationResult} =require('express-validator')
module.exports.registerCaptain = async (req,res,next) => {

    const errors = validationResult(req)
    if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
    }
 const {fullname,password,email,vehicle} =req.body
 const isCaptainAlreadyExist =await captainModel.findOne({email});
 if(isCaptainAlreadyExist){
   return res.status(400).json({message:'captain already exist'})
 }
 const hashedPassword = await captainModel.hashPassword(password);
 
 const captain =await captainService.createCaptain({

    firstname:fullname.firstname,
     lastname:fullname.lastname,
    email,
    password:hashedPassword,
   color:vehicle.color,
   plate:vehicle.plate,
   capacity:vehicle.capacity,
   vehicleType:vehicle.vehicleType
 })
if(!captain){
    return res.status(400).json({message:'captain not created'})
}

return res.status(201).json({captain})
}
module.exports.loginCaptain =async(req,res,next)=>{
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(401).json({errors:errors.array()})
  }
  const {email,password} = req.body
  const captain = await captainModel.findOne({email}).select("+password")
  console.log("hello");
  if(!captain){
    throw res.status(401).json({message:' captain not found'})
}
  const isPasswordCorrect= await captain.comparePassword(password)
  if(!isPasswordCorrect){
    throw res.status(401).json({message:'password is incorrect'})
}
console.log("hi");
  const token = await captain.generateAuthToken(captain._id)
  const options ={
    httpOnly: true,
    secure:true
  }
  return res.status(201)
  .cookie("token",token,options)
  .json({captain,token})
}
module.exports.captainProfile = async(req,res,next)=>{
  return res.status(201).json(req.captain)
}
module.exports.logoutCaptain =async(req,res,next)=>{
  const token =req.cookie?.token|| req.headers.authentication?.split(" ")[1]
  await blacklistTokenModel({token})
  res.clearCookie('token');
  return res.status(201).json({message:"captain logged out successfully"})
}