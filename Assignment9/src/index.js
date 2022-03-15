const express = require("express")
const app = express();

app.use(express.json())

const usercontroller = require("./controller/usercontroller")

app.use("/users",usercontroller)

module.exports = app