const RMOrder = require('../models/rmOrder');

const createRMOrder = async (req,res)=>{

    try{
        const RMOrderData = req.body;
        const newRMOrder = new RMOrder(RMOrderData);
        const savedRMOrder= await newRMOrder.save();
        res.status(200).json(savedRMOrder);
        console.log(savedRMOrder);

    }catch(err){
        res.status(400).send(err);
    }

}

module.exports = {
    createRMOrder,
}