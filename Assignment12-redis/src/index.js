const express = require("express")
const app = express()

app.use(express.json())

const productController = require("./controllers/productcontroller")

app.use("/product",productController)


module.exports = app;