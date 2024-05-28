const jwtSecret=process.env.JWT_SECRET
const jwt=require('jsonwebtoken');

const authMiddleware=(req,res,next){
    const token=req.headers('Authorization')
}