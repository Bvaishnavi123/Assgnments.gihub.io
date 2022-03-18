//we want user model here to verify
const User = require("../model/usermodel")
const jwt = require('jsonwebtoken');
require('dotenv').config()
// function to create token
function generateToken(user)
{
    // console.log(process.env.JWT_SCRETKEY)
    // getting environmet variable i.e sceret key 
    return jwt.sign({ user }, process.env.JWT_SCRETKEY);
}


// register controller
const register = async(req,res)=>{
    try {
        // to find email is already there or not

        let user = await User.findOne({email: req.body.email}).lean().exec()
        if(user)
        {
            // If email is already taken then 
           res.send("E-mail is already exesist")
        }
        // allow user to register 
        user = await User.create(req.body)
        // but password is  stored as it is in database as plain text 
        const token = generateToken(user)
        res.send({user,token})
        
    } catch (error) {
        res.send(error)  
    }
}
// login controller
const login = async(req,res)=>{
    try {
        // checking email exists or not
       let user = await User.findOne({email : req.body.email})
       if(!user)
       {
           return res.send("Your E-mail Or password is wronge")
       }
       // If e-mail exist check for password
      // for this we have to add method in user model 
       const matchPassword = user.checkPassword(req.body.password)  
       // matchPassword doesent match then ,
       if(!matchPassword)
       {
           res.send("Your E-mail Or password is wronge")
       }
       // generating token 
       const token = generateToken(user)
       res.send({user,token})
    } catch (error) {
        res.send(error)
    }
}


// exporting reg and log in to index file
module.exports ={register,login}