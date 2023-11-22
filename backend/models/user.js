const mongoose= require("mongoose")

const userModel= mongoose.Schema(
    {
        phoneNumber:{
            type: Number,
            required:true,
            unique:true
        },
        orders:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"Orders"
            }
        ]
    },
    {
        timestamps:true
    }
)

const User= mongoose.model("User",userModel)
module.exports= User