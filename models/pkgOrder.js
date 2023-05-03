const mongoose = require ('mongoose');

const PkgOrder = mongoose.model('PkgOrder',{
  
   quantity:{
        type : Number,
   },
   packageID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package',
   },
   fctOrderID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FctOrder',
   }

})

module.exports = PkgOrder;