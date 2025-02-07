const ProductModel = require("../model/ProductModel");

exports.Create=async(req,res)=>{
    try{
        let reqBody=req.body;
        await ProductModel.create(reqBody);
        return res.status(200).json({status:"success",message:"Request Completed"});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}



exports.Read=async(req,res)=>{
    try{
        let rows=await ProductModel.find();
        return res.status(200).json({status:"success",message:"Request Completed",row:rows});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}



exports.ReadByID=async(req,res)=>{
    try{
        let {id}=req.params
        let rows=await ProductModel.find({_id:id});
        return res.status(200).json({status:"success",message:"Request Completed",row:rows});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}





exports.Update=async(req,res)=>{
    try{

        // By ID OLD -> NEW-> Compare --> Change Column Name-CurrentValue/NewValue/Date--> Insert

        let {id}=req.params
        let reqBody=req.body;
        await ProductModel.updateOne({_id:id},reqBody);
        return res.status(200).json({status:"success",message:"Request Completed"});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}


exports.Delete=async(req,res)=>{
    try{
        let {id}=req.params
        await ProductModel.deleteOne({_id:id});
        return res.status(200).json({status:"success",message:"Request Completed"});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}
