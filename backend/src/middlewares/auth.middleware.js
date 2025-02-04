const userModel =require('../models/user.model')
const jwt = require('jsonwebtoken')
const blackListTokenModel = require('../models/blacklistToken.model')
module.exports.authUser= async(req,res,next)=>{
   
        const token =req.cookies?.token|| req.headers.authorization?.split(' ')[ 1 ];
        if(!token){
            return res.status(401).json({message:"unauthorized"})
        }
        const isBlacklisted = await blackListTokenModel.findOne({ token: token });

        if (isBlacklisted) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    
        try {
           
        const decodedToken = jwt.verify(token,process.env.JWT_SECRET)
        console.log("hello")
        const user = await userModel.findById(decodedToken?._id)
       
        if(!user){
            return res.status(401).json({message:'invalid token'})
        }
        req.user=user;
        next();
    } catch (error) {
        return res.status(401).json({message:error?.message||"Invalid access token"})
    }
}