const express= require("express")
const {fetchAllItems}= require("../modules/userModule")

const router= express.Router()

router.get("/",fetchAllItems)
// router.post("/",)

module.exports= router