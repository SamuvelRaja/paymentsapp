const express =require('express')
const app=express()
const dotenv = require('dotenv');
dotenv.config();
const authRoute=require("./routes/admin")
const cors=require("cors")
const port=3000

app.use(cors())
app.use(express.json())


app.use("/auth",authRoute)
app.use("/user",authRoute)
app.listen(port,function(){
    console.log("app is running on port 3000")
})