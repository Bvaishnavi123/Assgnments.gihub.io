const express = require('express');
const router = express.Router();
const User = require("../model/usermodel")
const uploads = require("../middlewares/fileuploads")
const multer = require("multer");
// const gallary = require("../model/gallarymodel")


router.get("/", async function(req, res){
    try {
        const user = await User.find().lean().exec()
        res.send(user)
    } catch (error) {
        res.send(error)
    }
 })


router.post("/", uploads.single("profilePic"), async function(req, res){
    //   console.log(  path.join(__dirname,"../uploads"))
   try {
    
       const user = await User.create({
          firstName : req.body.firstName,
          lastName : req.body.lastName,
          profilePic : req.file.path

       })
       res.send(user)
   } catch (error) {
       res.send(error)
   }
})

router.post("/multiple", uploads.array("profilePic",2), async function(req, res){
    //   console.log(  path.join(__dirname,"../uploads"))
   try {
       
      const filepaths = req.files.map((file)=>{
          return file.path
      })

       const user = await User.create({
          firstName : req.body.firstName,
          lastName : req.body.lastName,
          profilePic : filepaths

       })
       return res.send(user)
   } catch (error) {
       res.send(error)
   }
})




router.patch("/:id", async function(req, res){
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.send(user)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router