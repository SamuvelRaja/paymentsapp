const express=require('express')
const z=require("zod")
const User=require('../DB/db')
const jwt=require('jsonwebtoken')
const route=express.Router();


const passwordSchema = z.string()
  .min(8, "Password must be at least 8 characters long")
  .max(20, "Password must be less than 20 characters long")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
  );
const signSchema=z.object({
    email:z.string().email(),
    password:passwordSchema
})

route.post("/signup",async function(req,res){
    const data=req.body
    const valData=signSchema.safeParse(data)
    console.log(valData)
    if(!valData.success){
        return res.status(400).send({msg:"Invalid inputs"})
    }
    const existUser=User.findOne({email:data.email})
    console.log(existUser,"user")
    if(existUser.id){
        return res.status(400).send({msg:"User already exists"})
    }
    const create=await User.create(data)

    return res.json({
      msg:"user created sucessfully"
    })
})


route.post("/login",function(req,res){

})

module.exports=route