const express = require('express')
const router = express.Router()
const {body} =require('express-validator')
const userController =require('../controllers/user.controller.js')
router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be atleat 3  character long'),
    body('password').isLength({min:6}).withMessage('password should be atlest of length 6')
],userController.registerUser)
router.post('/login',[ body('email').isEmail().withMessage('Invalid email'), body('password').isLength({min:6}).withMessage('password should be atlest of length 6')],userController.loginUser)
module.exports =router;