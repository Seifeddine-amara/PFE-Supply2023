const FinalProduct = require('../models/finalProduct');

const createFP = async (req,res)=>{

    try{

        const FPData = req.body;
        const newFP = new FinalProduct({...FPData,FPImage:req.file.path});
        const savedFP = await newFP.save();
        res.status(200).send(savedFP);
        console.log(savedFP);

    }catch(err){
        res.status(400).send(err);
    }

}

const deleteFPrById = async(req,res)=>{

    try{    
        const FPId = req.params.id;
        const FP = await FinalProduct.findById(FPId);
        const FPName = FP.name;
        const FPDeleted = await FinalProduct.findByIdAndDelete(FPId);
        console.log(`${FPName} deleted succefuly`);
        res.status(201).send(FPDeleted);
    }catch(err){
        res.status(400).json(err);
    }

}

const findFPAll = async(req,res)=>{
    
    try{
        const FP = await FinalProduct.find();
        res.status(201).send(FP);
        console.log(FP);
    }catch(err){
        res.send(err);
        res.status(400).json(err);
    }
}


const findFPrById = async(req,res)=>{
    
    try{
        const FPId = req.params.id;
        const FP = await FinalProduct.findById(FPId);
        res.status(201).send(FP);
        console.log(FP);
    }catch(err){
        res.send(err);
        res.status(400).json(err);
    }
}

const findFPByType = async(req,res)=>{
    try{
        const type = req.params.type;
        const FP = await FinalProduct.find({type : type});
        console.log(FP);
        res.status(201).send(FP);
    }catch(err){
        res.status(400).json(err);
    }
}


const updateFPById = async (req, res) => {
    try {

        //console.log(" Before calling FPId");
        const FPId = req.params.id;
        //console.log(" After calling FPId");
        
        const {name, type, stock, dateProduction, delay, lotNumber, ingredient, createdBy, FPImage } = req.body;
        console.log(req.body);
        let updated = await FinalProduct.findById({_id: FPId});
     
        if(!updated){  
            res.status(404).json({message: 'Final Product not found'});
        }else{
            if (req.file) {
                // If there is a new image, update the product with the new image path
                FPImage = req.file.path;
                updated.name = name;
                updated.type = type;
                updated.stock = stock;
                updated.dateProduction = dateProduction;
                updated.delay = delay;
                updated.lotNumber = lotNumber;
                updated.ingredient = ingredient;
                updated.createdBy = createdBy;
                updated.FPImage = FPImage;
                const FPUpdatetd = await updated.save();
                res.status(200).json(FPUpdatetd); 
                console.log(FPUpdatetd);
                
            } else {
                // If there is no new image, update the product without changing the image path
                updated.name = name;
                updated.type = type;
                updated.stock = stock;
                updated.dateProduction = dateProduction;
                updated.delay = delay;
                updated.lotNumber = lotNumber;
                updated.ingredient = ingredient;
                updated.createdBy = createdBy;
                updated.FPImage = FPImage;
                const FPUpdatetd = await updated.save();
                res.status(200).send(FPUpdatetd);
                console.log(FPUpdatetd);
            }
        }
    } catch (err) {
      res.status(400).json(err);
    }
  };
  


module.exports = {
    createFP,
    deleteFPrById,
    findFPrById,
    findFPByType,
    findFPAll,
    updateFPById

}