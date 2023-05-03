const mongoose = require ('mongoose');

const FinalProduct = mongoose.model('FinalProduct',{
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
    ingredient:{
        type: String,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    FPImage:{
        type : String
    }
})

module.exports = FinalProduct;