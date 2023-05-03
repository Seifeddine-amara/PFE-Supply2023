const DstOrder = require('../models/dstOrder');
const DstFP = require('../models/dstFP');


const createDstOrder = async (req,res)=>{

    try{
        const DstOrderData = req.body;
        const newDstOrder = new DstOrder(DstOrderData);
        const savedDstOrder = await newDstOrder.save();
        res.status(200).json(savedDstOrder);
        console.log(savedDstOrder);

    }catch(err){
        res.status(400).send(err);
    }

}
const deleteDstOrder = async(req,res)=>{

    try{    
        const DstOrderId = req.params.id;
        await DstFP.deleteMany({ fctOrderID: DstOrderId });
        await DstOrder.deleteOne({ _id: DstOrderId });
        console.log('command deleted succefully');
        res.status(201).send();
    }catch(err){
        res.status(400).json(err);
    }

}

const findDstOrderById = async(req,res)=>{
    
    try{
        const DstOrderId = req.params.id;
        const NewDstOrder = await DstOrder.findById(DstOrderId);
        //.populate({path: factoryID, model: 'User' })
        res.status(201).json(NewDstOrder);
        console.log(NewDstOrder);
    }catch(err){
        res.status(400).json(err);
    }
}

module.exports = {
    createDstOrder,
    deleteDstOrder,
    findDstOrderById,


}