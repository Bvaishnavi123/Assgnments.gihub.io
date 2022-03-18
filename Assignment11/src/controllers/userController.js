const express = require("express")

const router =  express.Router()
const User = require("../model/usermodel")



// to get all users
router.get("/", async(req,res)=>{
    try {
        const user = await User.find().lean().exec()
        // creating token
     
       return res.send(user)
        
    } catch (error) {
       return res.send(error)
    }
})

// to create users
router.post("/", async(req,res)=>{
    try {
        const user = await User.create(req.body)
       return res.send(user)
        
    } catch (error) {
       return res.send(error)
    }
})

// export router to index file
module.exports = router