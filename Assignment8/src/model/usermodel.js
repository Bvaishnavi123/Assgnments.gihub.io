const mongoose = require("mongoose")

const userSchems = mongoose.Schema({
    firstName : {type:String,require:true},
    lastName : {type:String,require:true},
    email : {type:String,require:true},
    
},{
    
    timestamps : true,
    versionKey : false,
})

const User = mongoose.model("user",userSchems)

module.exports=User;