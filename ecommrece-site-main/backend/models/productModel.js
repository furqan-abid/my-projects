const mongoose = require('mongoose')
const Schema = require('mongoose').Schema;

const productSchema = new Schema({
    name:{
        type: String,
        required:[true,"please enter the product name"],
        trim: true
    },
    description:{
        type: String,
        required:[true,'please enter product description']
    },
    price:{
        type: Number,
        required:[true,"please enter product price"],
        maxlength:[8,"length cannot exeed 4 characters"]
    },
    ratings:{
        type: Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    catagory:{
        type:String,
        required:[true,'please ener the product category']
    },
    stock:{
        type:Number,
        required:[true,'please enter the product stock'],
        maxlength:[4,'cannot exceed 4 characters'],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            user:{
                type:mongoose.Schema.ObjectId,
                ref:"User",
                required:true
            },
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
},{
    timestamps:true
})

let products = mongoose.model('products',productSchema)
module.exports = products;