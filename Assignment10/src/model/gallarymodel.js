const mongoose = require("mongoose")

const gallarySchema = mongoose.Schema({
   userID : {type : mongoose.Schema.Types.ObjectId,ref : "user"},
     
})