const mongoose = require ('mongoose');

const DstFP = mongoose.model('DstFP',{
  
   deliveryAdress:{
        type : String,
   },
   dstOrderID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DstOrder'
     
   },
   finalProductID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FinalProduct'
        
   }

})

module.exports = DstFP;