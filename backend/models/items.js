const { Double } = require("mongodb")
const mongoose= require("mongoose")

const items= mongoose.Schema(
    {
        barcode:{
            type:Number,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        wholesale_price:{
            type:Double,
        },
        retail_price:{
            type:Double
        },
        avatar:{
            type:String,
            default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
        }
    }
)

const Items= mongoose.model("Items",items)
module.exports=Items