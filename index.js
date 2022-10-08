const { json } = require("express")
const express = require("express")


const app = express()

// middlewares 
app.use(json())

app.get("/",(req,res)=>{
    res.send("Hello world")
})


app.listen(5000,()=>{
    console.log("server connected on port 5000")
})