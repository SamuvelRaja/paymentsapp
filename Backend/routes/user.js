const express=require('express')
const z=require("zod")
const User=require('../DB/db')
const jwt=require('jsonwebtoken')
const userRoute=express.Router();

userRoute.get()