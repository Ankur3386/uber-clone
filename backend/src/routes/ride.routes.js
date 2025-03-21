const express =require('express')
const router =express.Router()
const {body}=require('express-validator')
const rideController=require('../controllers/ride.controller')
const authMiddleware =require('../middlewares/auth.middleware.js')
router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({min:2}).withMessage('invalis pickup address'),
    body('destination').isString().isLength({min:2}).withMessage('invalis destination address'),
    body('vehicleType').isString().isIn(['auto','car','moto']).withMessage('Invalid vehicleType'),
rideController.createRide
)
module.exports=router