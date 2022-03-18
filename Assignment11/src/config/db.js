const mongoose = require("mongoose")

// connecting to database
const connect = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/commomnData")
}

//exporting connect to server
module.exports = connect;