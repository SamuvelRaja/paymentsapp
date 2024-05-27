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
const jwtSecret=process.env.JWT_SECRET

route.post("/signup",async function(req,res){
    const data=req.body
    const valData=signSchema.safeParse(data)
    
    if(!valData.success){
        return res.status(400).send({msg:"Invalid inputs"})
    }
    const existUser=await User.findOne({email:data.email})
    if(existUser!==null){
        return res.status(400).send({msg:"User already exists"})
    }

    
    const create=await User.create(data)
    console.log(create,"kk", create._id,"ll", create.id)
    if(create){
      const token =jwt.sign({
        userId:create._id
      },jwtSecret)
     return res.json({
          msg:"user created sucessfully",
          token:token
        })
 }
   
   

    
})

    const loginSchema=z.object({
        email:z.string().email(),
        password:z.string()
    })

route.post("/login",async function(req,res){
  console.log(req.body)
  const loginParse=loginSchema.safeParse(req.body)
  if(!loginParse.success){
      return res.status(400).send({msg:"Invalid inputs"})
  }
  const logUser=await User.findOne({email:req.body.email})
  console.log(logUser)
  if(logUser===null){
      return res.status(400).send({msg:"User not found"})
  }else if(logUser.password===req.body.password){
      const token=jwt.sign({
        userId:logUser._id
      },jwtSecret)    
      return res.json({
          msg:"Login successful",
          token:token
      })
  }
})

module.exports=route