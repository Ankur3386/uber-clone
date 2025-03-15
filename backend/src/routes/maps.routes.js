const express =require('express')
const router=express.Router()
const authMiddleware =require('../middlewares/auth.middleware.js')
const mapController=require('../controllers/maps.controller.js')
const {query} =require('express-validator')

router.get('/get-coordinates',
    query('address').isString().isLength({min:3}),
    authMiddleware.authUser,mapController.getCoordinate)
    router.get('/get-distance-time',query('origin').isString().isLength({min:3}),
query('destination').isString().isLength({min:3}),
authMiddleware.authUser,mapController.getDistanceTime)
router.get('/get-suggestination',query('input').isString().isLength({min:3}),authMiddleware.authUser,mapController.getAutoCompleteSuggestinations)
module.exports=router;