const express=require('express')
const z=require("zod")

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

route.post("/signup",function(req,res){
    const data=req.body
    const valData=signSchema.safeParse(data)
    console.log(valData)
    if(valData.success){
        res.send({})
    }else{
        res.status(400).send({msg:"Invalid inputs"})
    }
    
    return
})


route.post("/login",function(req,res){

})

module.exports=route