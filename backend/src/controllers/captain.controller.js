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
   return res.staus(400).json({message:'captain already exist'})
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
