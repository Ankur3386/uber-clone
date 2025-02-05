const mongoose =require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minLength:[3,"name should be aleast of atleast 3 length"]
        },
        lastname:{
            type:String,
            minLength:[3,"name should be aleast of atleast 3 length"]

        }
    },
    password:{
        type:String,
        required:true,
        select: false,
        minLength:[6,'password should be atleast of 6 digit']
    },
    email:{
        type:String,
        required:true,
    },
    socketid:{
        type:String
    },
    status:{
        type:String,
        enum:['Active','Inactive'],
        default:'Inactive'
    },
    vehicle:{
       vechicleType:{
         type:String,
         required:true,
        enum:['motorcycle','car','auto'],
       },
    color:{
    type:String,
    required:true,
    minlength: [ 3, 'Color must be at least 3 characters long' ],
    },
    plate:{
    type:String,
    required:true,
    minlength: [ 3, 'Plate must be at least 3 characters long' ],
    },
    capacity:{
    type:Number,
    required:true,
    min:[1,'capacity should be atleast one']
}
    },
    location: {
        ltd: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    }
})
captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}
captainSchema.methods.generateAuthToken =async function(){
    return jwt.sign(
        {_id:this._id},
        process.env.JWT_SECRET,
        {expiresIn:'24h'}
    )
}
captainSchema.statics.hashPassword= async function (passsword){
    if (!password) {
        throw new Error("Password is required for hashing");
    }

    return await bcrypt.hash(passsword,10)
}
const captainModel = mongoose.model('captainModel',captainSchema)
module.exports= captainModel;