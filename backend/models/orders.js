const mongoose= require("mongoose")

const orders= mongoose.Schema(
    {
        
    }
)

const Orders= mongoose.model("Orders",orders)
module.exports= Orders