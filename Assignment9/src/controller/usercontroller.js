const express = require("express")

const { body, validationResult } = require('express-validator');

const route = express.Router()

const User = require("../model/userModel")

route.post("/", body("firstName").not().isEmpty().withMessage("First Name cannot be empty"),body("email").isEmail().custom(async(value)=>{
    const user = await User.findOne({email : value})
    if(user)
    {
        throw new Error('email is already taken');
    }
    return true;
}),body("age").not().isEmpty().isNumeric().custom((value)=>{
    if(value< 1 || value>100)
    {
        throw new Error('age is inavlid');
    }
    return true;
}),body("pincode").not().isEmpty().isLength(6).withMessage("pincode should be of 6 digits")


,async(req,res)=>{
    try {

        const errors = validationResult(req);
       if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
        const user = await User.create(req.body)
        res.status(201).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = route