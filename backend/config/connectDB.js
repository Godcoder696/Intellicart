const mongoose= require("mongoose")

const connectDB= async ()=>{
    try {
        const connect= await mongoose.connect(process.env.URI)
        console.log("Connected to database with URI: ",connect.connection.host);
    } catch (error) {
        console.log(error);
    }
}

module.exports= connectDB