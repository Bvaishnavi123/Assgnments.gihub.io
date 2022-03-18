
const express = require("express")

const router =  express.Router()

const Product = require("../model/postmodel")
const authenticate = require("../middlewares/authenticate")

// To get assure that the user  is authenticate or not we require a middleware which which give assurance
router.post("/",authenticate,async (req, res) => {

    console.log(req.user)
    req.body.userID = req.user._id
    try{
       
        const product = await Product.create(req.body)
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
 
})

module.exports = router