const express = require("express");
const transporter = require("./configs/mail")
const app = express()
app.use(express.json())

module.exports = app;







const userController = require("./controller/usercontroller")
app.use("/user",userController)


