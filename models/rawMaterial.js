const mongoose = require ('mongoose');

const RawMaterial = mongoose.model('RawMaterial',{
    name: {
        type: String,
    },
    type:{
        type: String,
    },
    stock:{
        type: Number,
    },
    dateProduction:{
        type: Date,
    },
    delay:{
        type: Date,
    },
    lotNumber:{
        type: Number,
    },
    humidity:{
        type: String,
    },
    temp:{
        type: String,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    certificationImage: {
        type: String,
    }
   
});

module.exports = RawMaterial;