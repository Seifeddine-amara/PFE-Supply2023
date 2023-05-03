const PkgOrder = require('../models/pkgOrder');

const createPkgOrder = async (req,res)=>{

    try{
        const PkgOrderData = req.body;
        const newPkgOrder = new PkgOrder(PkgOrderData);
        const savedPkgOrder= await newPkgOrder.save();
        res.status(200).json(savedPkgOrder);
        console.log(savedPkgOrder);

    }catch(err){
        res.status(400).send(err);
    }

}

module.exports = {
    createPkgOrder,
}