
const express = require("express")

const router =  express.Router()

const Product = require("../model/postmodel")
const authenticate = require("../middlewares/authenticate")
const authrization = require("../middlewares/authorization")

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

router.patch("/:id",authenticate,authrization(["admin","seller"]),async(req,res)=>
{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.send(product)

    } catch (error) {
       console.log(error) 
    }
})

module.exports = router