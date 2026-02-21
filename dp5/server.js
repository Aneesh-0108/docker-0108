
const express = require("express")

const mongoose = require("mongoose")

const app = express()

const PORT = 3000

mongoose.connect("mongodb://mongo:27017/testdb")
.then(() => console.log("Connected to MongoDB"))
.catch(() => console.error(err));

app.get("/health", (req,res)=>{
    res.json({status:"OK", db: "connected"})
})


app.listen(PORT, ()=>{
    console.log(`AP1 running on ${PORT}`)
})
