var express = require('express');
const User=require('../models/userModel')
const bodyparser=require("body-parser")
const Errorhandler=require('../utilis/errorHandler');
const sendToken = require('../utilis/jwtToken');
const { isAuthenticated, verifyAdmin } = require('../middlewares.js/auth');
const sendEmail= require('../utilis/sendEmail')
const crypto = require('crypto')

const UserRouter = express.Router();
UserRouter.use(bodyparser.json())

UserRouter.route('/admin/users')
.get((req,res,next)=>{
  User.find({})
  .then((user)=>{
    res.status(200).json(user)
  })
})

UserRouter.route('/admin/user/:id')
.get(isAuthenticated,verifyAdmin("admin"),(req,res,next)=>{
  User.findById(req.params.id)
  .then((user)=>{
    res.status(200).json({success:true,user})
  },err=>next(err))
  .catch(err=>next(err))
})
.put(isAuthenticated,verifyAdmin("admin"),(req,res,next)=>{
  const newData={
    role:req.body.role
  }
  User.findByIdAndUpdate(req.params.id,newData,{new:true,runValidators:true})
  .then((user)=>{
    res.status(200).json({success:true,user})
  })
})
.delete(isAuthenticated,verifyAdmin("admin"),(req,res,next)=>{
  User.findById(req.params.id)
  .then((user)=>{
    if(!user){
      return next(new Errorhandler("user not found",404))
    }
    user.remove()
    .then(()=>{
      res.status(200).json({succss:true,messege:"user deleted successfully"})
    })
  })
})

UserRouter.post('/signup',(req,res,next)=>{
  const {name,email,password}=req.body;
  User.create({
    name,
    email,
    password,
  avatar:{
    public_id:"fake",
    url:"profile"
  }})
  .then((user)=>{
    sendToken(user,200,res)
  },err=>next(err))
  .catch(err=>next(err))
})

UserRouter.post('/login',(req,res,next)=>{
  const {email , password}=req.body;
  
  if(!email || !password){
    return next(new Errorhandler("invalid email or password",401))
  }
  User.findOne({email}).select("+password")
  .then((user)=>{
    if(!user){
      return next(new Errorhandler("invalid email or passwrod",401))
    }
  
    const isPasswordMatched = user.comparePassword(password);
  
    
    if(!isPasswordMatched){
      return next(new Errorhandler("invalid email or passwrod",401))
    }

    sendToken(user,200,res)
  },err=>next(err))
  .catch(err=>next(err))


})

UserRouter.post('/password/forgot',(req,res,next)=>{
  User.findOne({email:req.body.email})
  .then((user)=>{
    if(!user){
      return next(new Errorhandler("user not found",404))
    }

    // get reset password token

    const resetToken= user.getResetPasswordToken();

    user.save({validateBeforeSave:false})
    .then((user)=>{
      const resetPasswordUrl=`${req.protocol}://${req.get("host")}/users/password/reset/${resetToken}`;
      const messege= `Your password reset token is :\n\n ${resetPasswordUrl}\n\nif you have not requested this email, then please ignore it`

      try {
        sendEmail({
          email:user.email,
          subject:'ecomeerece4 password recovery',
          messege,
        })
        .then(()=>{
          res.status(200).json({
            success:true,
            message:`email send to ${user.email} succefully`
          })
        },err=>next(err))
        .catch(err=>next(err))
      } catch (error) {
        user.ResetPasswordToken=undefined;
        user.resetPasswordExpire=undefined;
        user.save({validateBeforeSave:false})
        .then(()=>{
          return next(new Errorhandler(error.message,500))
        },err=>next(err))
        .catch(err=>next(err))
      }
    },err=>next(err))
    .catch(err=>next(err))
  },err=>next(err))
  .catch(err=>next(err))
})


UserRouter.put('/password/reset/:token',(req,res,next)=>{
  // creating tokenhash
  const resetPasswordtoken= crypto.createHash('sha256').update(req.params.token).digest('hex');

  User.findOne({resetPasswordtoken,resetPasswordExpire:{$gt:Date.now()}})
  .then((user)=>{
    if(!user){
      return next(new Errorhandler("reset password token is invalid or has been expired"),400)
    }
    if(req.body.password !== req.body.confirmPassword){
      return next(new Errorhandler("passwrod does not match",400))
    }
    user.password=req.body.password;
    user.resetPasswordtoken=undefined;
    user.resetPasswordExpire=undefined;
    user.save()
    .then((user)=>{
      sendToken(user,200,res)
    },err=>next(err))
    .catch(err=>next(err))
  },err=>next(err))
  .catch(err=>next(err))
})

UserRouter.get('/logout',(req,res,next)=>{
  res.cookie("token",null,{
    expires:new Date(Date.now()),
    httpOnly:true
  })
  res.status(200).json({
    success:true,
    messege:"logged out"
  })
})

UserRouter.get('/me',isAuthenticated,(req,res,next)=>{
  User.findById(req.user.id)
  .then((user)=>{
    if(!user){
      return next(new Errorhandler("user not found",404))
    }
    res.status(200).json({success:true,user})
  },err=>next(err))
  .catch(err=>next(err))
})

UserRouter.put('/password/update',isAuthenticated,(req,res,next)=>{
  User.findById(req.user.id).select("+password")
  .then((user)=>{
    const isPasswordMatched=user.comparePassword(req.body.oldPassword)
    if(!isPasswordMatched){
      return next(new Errorhandler("password does not match",400))
    }

    if(req.body.newPassword !== req.body.confirmPassword){
      return next(new Errorhandler("passwrods does not match",400))
    }
    user.password=req.body.newPassword;

    user.save()
    .then((user)=>{
      sendToken(user,200,res)
    },err=>next(err))
    .catch(err=>next(err))
  },err=>next(err))
  .catch(err=>next(err))
})

UserRouter.put('/me/update',isAuthenticated,(req,res,next)=>{
  const newData={
    email:req.body.email,
    name:req.body.name
  }
  User.findByIdAndUpdate(req.user.id,newData,{new:true,runValidators:true})
  .then((user)=>{
    res.status(200).json({success:true,user})
  })
})
module.exports = UserRouter;
