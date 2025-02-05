const express =require('express')
const router = express.Router()
const captainController =require('../controllers/captain.controller')
const authMidlleware =require('../middlewares/auth.middleware')

const {body} =require('express-validator')
router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be atleat 3  character long'),
    body('password').isLength({min:6}).withMessage('password should be atlest of length 6'),
    body('vehicle.color').isLength({min:3}).withMessage('color should be of atleast 3 character'),
    body('vehicle.capacity').isInt({min:1}).withMessage('capacity should be atleasst 1'),
    body('vehicle.plate').isLength({min:3}).withMessage('plate should be atleast of 3 character'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid selected vehicle')
],captainController.registerCaptain)
router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:3}).withMessage("password should be atlest of length 6")
],captainController.loginCaptain)
router.get('/profile',authMidlleware.authCaptain,captainController.captainProfile)
router.get('/logout',authMidlleware.authCaptain,captainController.logoutCaptain)

module.exports=router