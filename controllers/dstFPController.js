const DstFP = require('../models/dstFP');

const createDstFP = async (req,res)=>{

    try{
        const DstFPData = req.body;
        const newDstFP = new DstFP(DstFPData);
        const savednewDstFP= await newDstFP.save();
        res.status(200).json(savednewDstFP);
        console.log(savednewDstFP);

    }catch(err){
        res.status(400).send(err);
    }

}

module.exports = {
    createDstFP,
}