const mapService=require('../services/maps.service')
const {validationResult} =require('express-validator')

module.exports.getCoordinate =async(req,res,next)=>{
const errors =validationResult(req)
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});

}
   const{address}=req.query;
    try {
        //token will be required while sending address ad middleware used in routes
        const coordinates= await mapService.getAddressCoordinate (address)
        res.status(200).json(coordinates)
    } catch (error) {
        res.status(404).json({message:'Coordinates not found'})
    }
}


module.exports.getDistanceTime = async (req, res, next) => {
    try {
        // Validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("Ankur1");
            return res.status(400).json({ errors: errors.array() });
        }

        console.log("Ankur2");
        const { origin, destination } = req.query;

        if (!origin || !destination) {
            return res.status(400).json({ message: "Missing required query parameters: origin and destination" });
        }

        // Convert city names to coordinates
        const originCoords = await mapService.getAddressCoordinate(origin);
        const destinationCoords = await mapService.getAddressCoordinate(destination);

        if (!originCoords || !destinationCoords) {
            return res.status(404).json({ message: "Unable to fetch coordinates for given locations" });
        }

        console.log("Ankur3");

        // Get distance and time
        const distanceTime = await mapService.getDistanceAndTime(originCoords, destinationCoords);

        if (!distanceTime) {
            return res.status(500).json({ message: "Failed to fetch distance and time" });
        }

        return res.status(200).json(distanceTime);
    } catch (error) {
        console.error("Error in getDistanceTime:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports.getAutoCompleteSuggestinations=async(req,res,next)=>{
    try {
       const errors =validationResult(req)
       if (!errors.isEmpty()) {
        console.log("Ankur1");
        return res.status(400).json({ errors: errors.array() });
    }
    const {input} =req.query
    const suggestion = await mapService.getAutoCompleteSuggestions(input)
    res.status(200).json(suggestion)
    } catch (error) {
        console.error("getAutiCompleteSuggestinations:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
