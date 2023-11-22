const express= require("express")
const dotenv= require("dotenv")
const adminRoutes= require("./routes/adminRoutes")
const userRoutes= require("./routes/userRoutes")
const connectDB= require("./config/connectDB")

dotenv.config()

connectDB()

const app= express()

const PORT= process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log("Helloo from!",PORT);
})

app.use("/admin/",adminRoutes)
app.use("/user/",userRoutes)