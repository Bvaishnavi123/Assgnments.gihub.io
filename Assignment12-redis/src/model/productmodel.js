const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name : {type:String,require:true},
    body : {type:String,require:true}
},
{
    timestamps:true,
    versionKey : false
})
const Product = mongoose.model("product",productSchema)

module.exports = Product