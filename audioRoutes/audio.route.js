const express=require("express");
const { AudioModel } = require("../audioModel/audio.model");
const audioRoter=express.Router();


audioRoter.get("/",async(req,res)=>{
 try {
    const audios=await AudioModel.find();
    res.status(200).send({"data":audios,"msg":"successful"})
    
 } catch (error) {
    res.status(400).send({"msg":error})
 }
});

audioRoter.post("/record",async(req,res)=>{
 try {
    const audio=new AudioModel(req.body);
         await audio.save();
        //  const audios=await AudioModel.find();
    res.status(200).send({"data":audio,"msg":"new audio added successful"})
    
 } catch (error) {
    res.status(400).send({"msg":error})
 }
});




module.exports={audioRoter};