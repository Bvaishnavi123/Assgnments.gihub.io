const express = require("express")
const app = express();

app.use(express.json())
// usercontroller is used to handle crud operations with user path
const usercontroller = require("./controllers/userController")
// request with /users is goes to usercontroller
app.use("/users",usercontroller )

// making product controller to make sure that product created is from te loggedin user
const ProductController = require("./controllers/productconroller")
app.use("/products", ProductController)


// we have to make seperate controller fr reg and login as we dont want path as /user/register
const {register,login} = require("./controllers/authcontroller");
const Product = require("./model/postmodel");

// crud for register and login
app.post("/register", register)
app.post("/login", login)

module.exports = app;