const express=require("express");
const cors=require("cors");
const { connection } = require("./db");
const { audioRoter } = require("./audioRoutes/audio.route");
const app=express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/audio",audioRoter)

app.get("/",(req,res)=>{
    res.send("wnp");
})





app.listen(process.env.PORT,async()=>{
try{
    await connection;
    console.log("server running at port 7000 and db connected");
}
catch(err){
    console.log(err)
}
})