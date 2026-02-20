const express = require("express")

const app = express()

const PORT = 3000

app.get("/health", (req,res)=>{
    res.json({status: "OK",message: "Server is healthy ;)"});

    });


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
}); 