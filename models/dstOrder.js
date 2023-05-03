const mongoose = require ('mongoose');

const DstOrder = mongoose.model('DstOrder',{
  
   date_Cmd:{
        type : Date,
        default : Date.now
   },
   deleveryAdress:{
        type : String
   },
   distributorID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
   },
//    finalProductID:{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'FinalProduct'
//    }
})

module.exports = DstOrder;