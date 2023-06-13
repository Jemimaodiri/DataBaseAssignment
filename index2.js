const Express=require("express");
const port=2001;

require("./config/db")
const app=Express();
app.use(Express.json());
app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Api is available"
    })
})


app.listen(port,()=>{
    console.log("Server is up and listening on port:", port)
})
