const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const PORT = 8000;

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.get("/api/home",(req,res)=>{
    res.json({message:"Hello world"})
})

app.listen(PORT,()=>{
    console.log(`Server start on port ${PORT}`)
})