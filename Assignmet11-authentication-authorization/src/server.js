const app = require("./index")
const connect = require("./config/db")

// listening on port or starting the server
app.listen(5000, async()=>{
    try {
        await connect()
        console.log("listening on port 5000")
    } catch (error) {
       console.log(error)  
    }
})