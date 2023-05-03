const RtlFP = require('../models/rtlFP');

const createRtlFP = async (req,res)=>{

    try{
        const RtlFPData = req.body;
        const newRtlFP = new RtlFP(RtlFPData);
        const savednewRtlFP= await newRtlFP.save();
        res.status(200).json(savednewRtlFP);
        console.log(savednewRtlFP);

    }catch(err){
        res.status(400).send(err);
    }

}

module.exports = {
    createRtlFP,
}