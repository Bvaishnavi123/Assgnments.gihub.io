let express = require("express")
// For getting the object inside my express function we have to execute it
let app = express()
// console.log(app)
// by using listen we can port it which will take number & a call back function

/*
REST  API

Methods:
Get => To get data from server
Post => To post data on server
Put/Patch => To Update data on servers
Delete => To delete data on server
 */

app.get("/home",function(req,res){

    console.log("Hello")
  // if we want to send single object we have to do res.send()
    res.send("Hello World!");

})

app.get("/books",function(req,res){
    // if we want to send multiple object we have to do res.json
    res.json("[{Book1:Beleive in youself,content:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt nisl nec felis euismod, eu vulputate massa vestibulum. Curabitur ac cursus odio, quis sollicitudin metus. Ut quis feugiat augue. Sed ut sapien },{{Book2:Beleive in youself,content:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt nisl nec felis euismod, eu vulputate massa vestibulum. Curabitur ac cursus odio, quis sollicitudin metus. Ut quis feugiat augue. Sed ut sapien},{{Book3:Beleive in youself,content:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt nisl nec felis euismod, eu vulputate massa vestibulum. Curabitur ac cursus odio, quis sollicitudin metus. Ut quis feugiat augue. Sed ut sapien},{{Book4:Beleive in youself,content:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt nisl nec felis euismod, eu vulputate massa vestibulum. Curabitur ac cursus odio, quis sollicitudin metus. Ut quis feugiat augue. Sed ut sapien}]")
})

app.listen("5000",()=>{
    console.log("this is port 5000")
})
