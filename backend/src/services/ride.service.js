const rideModel=require('../models/ride.model.js')
const mapService =require('../services/maps.service.js')
const crypto = require('crypto');

async function getFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    }
 const originCoords = await mapService.getAddressCoordinate(pickup);
        const destinationCoords = await mapService.getAddressCoordinate(destination);
    const distanceTime = await mapService.getDistanceAndTime(originCoords, destinationCoords);
    console.log("Distance Time Response:", distanceTime);
    
    // Add error handling for null distanceTime
    if (!distanceTime) {
        throw new Error('Unable to calculate distance and time between these locations');
    }
    const distance = parseFloat(distanceTime.distance.replace(/[^\d.]/g, ''));
    const duration = parseFloat(distanceTime.duration.replace(/[^\d.]/g, ''));
    
    // Verify that we have valid numbers
    if (isNaN(distance) || isNaN(duration)) {
        throw new Error('Invalid distance or duration values');
    }
    const baseFare = {
        auto: 30,
        car: 50,
        moto: 20
    };

    const perKmRate = {
        auto: 10,
        car: 15,
        moto: 8
    };

    const perMinuteRate = {
        auto: 2,
        car: 3,
        moto: 1.5
    };

    const fare = {
        auto: Math.round(baseFare.auto + (distance * perKmRate.auto) + (duration * perMinuteRate.auto)),
        car: Math.round(baseFare.car + (distance * perKmRate.car) + (duration * perMinuteRate.car)),
        moto: Math.round(baseFare.moto + (distance * perKmRate.moto) + (duration * perMinuteRate.moto))
    };
   console.log(fare)
    return fare;
}


function getOtp(num) {
    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}
module.exports.createRide = async ({
    user, pickup, destination, vehicleType
}) => {
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error('All fields are required');
    }

    const fare = await getFare(pickup, destination);



    const ride = rideModel.create({
        user,
        pickup,
        destination,
        otp: getOtp(6),
        fare: fare[ vehicleType ]
    })

    return ride;
}

