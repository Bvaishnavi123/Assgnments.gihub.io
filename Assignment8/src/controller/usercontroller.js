const express = require("express")
const User = require("../model/usermodel")
const router = express.Router()
const transporter = require("../configs/mail")
const admin = require("../model/admin")

router.get("/",async(req,res)=>{
    try {
        const page = req.query.page || 1
        const pageSize = req.query.pageSize || 5

        const skip = (page-1)*pageSize // (1-1)*30 = 0 // (2-1)*30 = 30 

        const user = await User.find().skip(skip).limit(pageSize).lean().exec()
        const totalPgaes = Math.ceil((await User.find().countDocuments())/pageSize)
        return res.status(200).send({user,totalPgaes})
    } catch (error) {
        res.send(error)
    }
})

router.post("/", async(req,res)=>
{
    try {
         
        const user = await User.create(req.body)
        const admins = await admin.create(req.body)
          transporter.sendMail({
            from: '"Admin👻" <admin@123.com>', // sender address
            to: user.email,// list of receivers
            subject: `Welcome to ABC system ${user.firstName} ${user.lastName}`, // Subject line
            text: ` Hi ${user.firstName}, Please confirm your email address`, // plain text body
            html: "<b>Hello world?</b>", // html body
          });

          transporter.sendMail({
            from: '"Admin👻" <admin@123.com>', // sender address
            to: admins.email, // list of receivers
            subject: `${user.firstName} ${user.lastName}  has registered with us`, // Subject line
            text: ` welcome ${user.firstName} ${user.lastName}`, // plain text body
            html: "<b>Hello world?</b>", // html body
          });
    
         res.send("WELCOME!!!!!")


    } catch (error) {
        console.log(error)
    }
})

module.exports = router