const express = require("express");
const bodyparser = require("body-parser");
const Order = require("../models/orderModel");
const Product = require("../models/productModel")
const { isAuthenticated, verifyAdmin } = require("../middlewares.js/auth");
const Errorhandler = require("../utilis/errorHandler");

const orderRouter = express.Router();
orderRouter.use(bodyparser.json());

orderRouter.route('/')
.get(isAuthenticated,verifyAdmin('admin'),(req,res,next)=>{
    Order.find({})
    .then((orders)=>{
        let totalAmount=0;
        orders.forEach((order)=>{
            totalAmount+=order.totalPrice;
        })
        res.status(200).json({orders,totalAmount})
    })
})

orderRouter.post("/new", isAuthenticated, (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  })
    .then(
      (order) => {
        res.status(201).json(order);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

orderRouter.route('/:orderid')
.get(
  isAuthenticated,
  (req, res, next) => {
    Order.findById(req.params.orderid)
      .populate("user", "name email")
      .then((order) => {
        res.status(200).json(order);
      });
  }
)
.put(isAuthenticated,verifyAdmin('admin'),(req,res,next)=>{
  Order.findById(req.params.orderid)
  .then((order)=>{
    if(!order){
      return next(new Errorhandler("no order found with this id",400))
    }
    if(order.orderStatus==="Delivered"){
      return next(new Errorhandler('you have already delivered this order',400))
    }
    if(req.body.status==="Shipped"){
      order.orderItems.forEach((o)=>{
        Product.findById(o.product)
        .then((product)=>{
          if(!product){
            return next(new Errorhandler("product not found",400))
          }
          product.stock-=o.quantity;
          product.save({validateBeforeSave:false})
          console.log(product)
        },err=>next(err))        
        .catch(err=>next(err))
      })
    }
    order.orderStatus=req.body.status;
    if(req.body.status==="Delivered"){
      order.deliveredAt=Date.now();
    }
    order.save({validateBeforeSave:false})
    .then((order)=>{
      res.status(200).json(order)
    },err=>next(err))
    .catch(err=>next(err))
  },err=>next(err))
  .catch(err=>next(err))
})
.delete(isAuthenticated,verifyAdmin("admin"),(req,res,next)=>{
  Order.findById(req.params.orderid)
  .then((order)=>{

    if(!order){
      return next(new Errorhandler("order not found with this id"),404)
    }
    order.remove()
    .then((order)=>{
      res.status(200).json({success:true,order})
    },err=>next(err))
    .catch(err=>next(err))
  },err=>next(err))
  .catch(err=>next(err))
})

orderRouter.get(
  "/user/orders",
  isAuthenticated,
  (req, res, next) => {
    Order.find({ user: req.user._id })
      .then(
        (order) => {
          res.status(200).json(order);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  }
);

module.exports = orderRouter;
