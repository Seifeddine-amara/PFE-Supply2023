const mongoose = require ('mongoose');

const RtlFP = mongoose.model('RtlFP',{
  
   deliveryAdress:{
        type : String,
   },
   rtlOrderID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RtlOrder'
     
   },
   finalProductID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FinalProduct'
        
   }

})

module.exports = RtlFP;