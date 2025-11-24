import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT;

// req.methods

app.get("/test",(req,res)=>{
    try {
        console.log(`Req.method ==> ${req.method}`);
        console.log(`Req.baseUrl ==> ${req.baseUrl}`)
        console.log(`Req.hostname ==> ${req.hostname}`);
        console.log(`Req.ip ==> ${req.ip}`);
        console.log(`Req.ips ==> ${req.ips}`);
        console.log(`Req.originalUrl ==> ${req.originalUrl}`);
        console.log(`Req.path ==> ${req.path}`);
        console.log(`Req.protocol ==> ${req.protocol}`);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

// res.methods
app.get("/restest", (req, res) => {
    try {
        res.status(200).json({msg:"hI"})
        res.status(200).download("/home/suhail/CFI-B25-Classwork/express/server2/test.webp")

        res.status(200).end("hello");
        res.status(200).redirect("http://google.com");
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})

app.listen(port,()=>{
    console.log(`Server is Alive at http://localhost:${port}`);
})
