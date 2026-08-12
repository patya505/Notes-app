const express=require('express');
const app=express();
const cors=require('cors')
const path=require('path')
const Notemodel=require("./model/notes.model");
app.use(express.json());
app.use(express.static("./public"))
app.use(cors());
app.post("/api/notes",async (req,res)=>{
    const { title,description}=req.body;
    
    const notes= await Notemodel.create({
        title,description
    })
    res.status(201).json({
        message:"Note created successfully",   
    });
});
app.get("/api/notes",async (req,res)=>{
    const notes=await Notemodel.find();
    res.status(200).json({
        message:"Notes fetched successfully",
        notes
    });
});

app.delete("/api/notes/:id",async (req,res)=>{
    const notes=await Notemodel.findByIdAndDelete(req.params.id);
    res.status(200).json({
        message:"Note deleted successfully",
        notes
    });
});

app.patch("/api/notes/:id",async (req,res)=>{
    const {description}=req.body;
    const {id}=req.params;
    const notes=await Notemodel.findByIdAndUpdate(id,{description});
    res.status(200).json({
        message:"Note updated successfully",
        notes
    });
})

app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/index.html"))
})

module.exports=app;