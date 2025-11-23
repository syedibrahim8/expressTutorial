import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json())
const port = process.env.PORT;

app.get("/",(req,res)=>{
    try {
        console.log("Hi");
        res.status(200).json({msg:"Welcome"});
    } catch (error) {
        console.log(error.name);
        res.status(500).json({msg:error})
    }
})

app.post("/register",(req,res)=>{
    try {
        let userEmail = req.body.email;
        let userPassword = req.body.pass;
        if(userPassword.length<6){
            return res.status(501).json({msg:"password is too short"})
        }
        console.log(`Email : ${userEmail}\nPassword : ${userPassword}`);
        res.status(201).json({msg:"Account registered successful"})
    } catch (error) {
        console.log(error.name);
        res.status(401).json({msg:error})
    }
})

app.put("/update",(req,res)=>{
    try {
        let userPassword = req.body.pass;
        console.log(`Updated Password: ${userPassword}`);  
        res.status(201).json({msg:"Account updated successfully"})
    } catch (error) {
        console.log(error.name);
        res.status(401).json({msg:error})   
    }
})

app.delete("/delete",(req,res)=>{
    try {
        let userEmail = req.body.email;
        console.log(`Deleted ${userEmail}`);
        res.status(404).json({msg:"Account deleted"})
    } catch (error) {
        console.log(error.name);
        res.status(204).json({msg:error}) 
    }
})

app.listen(port,()=>{
    console.log(`server start at http://localhost:${port}`);
})