const mongoose = require ('mongoose');

const RtlOrder = mongoose.model('RtlOrder',{
  
   date_Cmd:{
     type : Date,
     default: Date.now
   },
   deleveryAdress:{
        type : String
   },
   retailerID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
   },
//    finalProductID:{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'FinalProduct'
//    }
})

module.exports = RtlOrder;