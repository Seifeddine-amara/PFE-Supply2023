const mongoose = require('mongoose');
const {isEmail} = require('validator');




const User = mongoose.model('User', {
    email:{
        type: String,
        required: [true,'You must enter your email'],
        unique: true,
        validate: [isEmail, 'Please enter a valid Email']
    },
    password:{
        type: String,
        required: [true,'You must enter your password'],
    },
    role:{
        type: String,
        required: [true,'You must pick your role'],
        enum:['provider','factory','distributor','retailer'],
    },
    companyName: {
        type: String,
        required: [true,'You must enter your CompanyName'],
    },
    address:{
        type: String,
        required: [true,'You must enter your address'],    
    },
    phoneNumber:{
        type:Number,
    },
    registrationNumber:{
        type:String
    },
    domain:{
        type: String
    },
    wallet: {
        type:String,
        required:[true, 'You must enter your wallet Address'],
    }


})

module.exports = User;