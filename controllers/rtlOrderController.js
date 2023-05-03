const RtlOrder = require('../models/rtlOrder');
const RtlFP = require('../models/rtlFP');


const createRtlOrder = async (req,res)=>{

    try{
        const RtlOrderData = req.body;
        const newRtlOrder = new RtlOrder(RtlOrderData);
        const savedRtlOrder = await newRtlOrder.save();
        res.status(200).json(savedRtlOrder);
        console.log(savedRtlOrder);

    }catch(err){
        res.status(400).send(err);
    }

}
const deleteRtlOrder = async(req,res)=>{

    try{    
        const RtlOrderId = req.params.id;
        await RtlFP.deleteMany({ rtlOrderID: RtlOrderId });
        await RtlOrder.deleteOne({ _id: RtlOrderId });
        console.log('command deleted succefully');
        res.status(201).send();
    }catch(err){
        res.status(400).json(err);
    }

}

const findRtlOrderById = async(req,res)=>{
    
    try{
        const RtlOrderId = req.params.id;
        const NewRtlOrder = await RtlOrder.findById(RtlOrderId);
        //.populate({path: factoryID, model: 'User' })
        res.status(201).json(NewRtlOrder);
        console.log(NewRtlOrder);
    }catch(err){
        res.status(400).json(err);
    }
}

module.exports = {
    createRtlOrder,
    deleteRtlOrder,
    findRtlOrderById
}