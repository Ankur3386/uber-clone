const captainModel =require('../models/captain.model.js')
module.exports.createCaptain = async ({firstname,lastname,password,email,color,plate,capacity,vehicleType})=>{
    if(!firstname||!password||!email||!color||!plate||!capacity||!vehicleType){
        throw new Error({message:'all fields are required '})
    }
const captain = await captainModel.create({
    fullname:{
        firstname,
        lastname
    },
    email,
    password,
    vehicle:{
        plate,
        capacity,
        vehicleType ,
         color
    }
})
return captain ;
}
