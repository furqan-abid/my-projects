const Errorhandler = require("../utilis/errorHandler");
const jwt=require('jsonwebtoken');
const config = require("../config");
const User=require('../models/userModel')

exports.isAuthenticated=async (req,res,next)=>{
    const {token}=req.cookies;

    if(!token){
        return next(new Errorhandler("please login first"),401)
    }

    const decodeData=jwt.verify(token,config.secreKey)

    req.user=await User.findById(decodeData.id)

    next()
}

exports.verifyAdmin=(...roles)=>{
    return(req,res,next)=>{   
    if(!roles.includes(req.user.role)){
        return next(
            new Errorhandler("not a admin",403)
        )
    }
    next()
    }
}