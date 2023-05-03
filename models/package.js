const mongoose = require ('mongoose');

const Package = mongoose.model('Package',{
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
    rawMaterials:{
        type: String,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
})

module.exports = Package;