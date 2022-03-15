const mongoose = require("mongoose")

const adminSchems = mongoose.Schema({
    firstName : {type:String,require:true},
    lastName : {type:String,require:true},
    email : {type:String,require:true},
    
},{
    
    timestamps : true,
    versionKey : false,
})

const admin= mongoose.model("admin",adminSchems)

module.exports= admin;