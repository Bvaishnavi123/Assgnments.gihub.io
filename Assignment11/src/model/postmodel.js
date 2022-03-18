const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    title : {type:String,require:true},
    body : {type:String,require:true},
     userID : {type : mongoose.Schema.Types.ObjectId , ref :"user"}

})

const Product = mongoose.model("product",productSchema)
module.exports = Product;
