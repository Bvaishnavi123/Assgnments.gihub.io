const mongoose = require ("mongoose")
const bcrypt = require('bcrypt');

// creating user Schema
const userSchema = mongoose.Schema({
    name : {type : String,require:true},
    email : {type : String , require : true , unique: true},
    password : {type : String, require:true}
},{
    timestamps : true,
    versionKey : false
})      
 // before svaing in database we have to hash the password hence we are going to use pre function
 // as we know this is not works in arrow function so we have to use normal function
 userSchema.pre("save" , function(next)
 {
     // hashing the pass
     let hash = bcrypt.hashSync(this.password, 8);
     this.password = hash

     // as its a middleware dont forget to next()
     return next();

})
// adding method to userSchema to compare hash password and entered password
// this method is called in login route
userSchema.methods.checkPassword = function(password)
{
   return   bcrypt.compareSync(password, this.password); 
}



// creating model
const User = mongoose.model("user",userSchema)
// exporting model to controller
module.exports = User