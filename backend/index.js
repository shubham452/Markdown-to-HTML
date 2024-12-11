const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { marked } = require("marked");

const app= express()
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


app.post("/change",(req,res)=>{
    const {markdown} = req.body;
    if(!markdown)
    {
        return res.status(400).json({error:"Text is missing"});
    }
    try {
        const htmlCode = marked(markdown);

        res.status(200).json({htmlCode});
    } catch (error) {
        res.status(500).json({error:"error"})
    }

    
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})