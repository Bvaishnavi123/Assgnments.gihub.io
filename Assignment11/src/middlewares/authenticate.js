//make a function varifyToken
const jwt = require('jsonwebtoken');
require('dotenv').config()
const verifyToken = (token)=>{
  return new Promise((resolve,reject) => {
    jwt.verify(token, process.env.JWT_SCRETKEY, (err,decoded) => {
        if(err) return reject(err)

        return resolve(decoded)
    });
})
}


// a middleware and we require token to pass in headers 
const authenticate = async(req,res,next)=>{
    // for getting  authorization token  we have  req.headers.authorization
    //1-case :=> if authorization is not present 
    if(!req.headers.authorization)
    {
      return   res.send("Authorization token is incorrect")
    }

    // 2-case :=> if Bearer is not available at front of token.
    if(!req.headers.authorization.startsWith("Bearer "))
    {
        return   res.send("Authorization token is incorrect")
    }

    // Its present 
    const token = req.headers.authorization.trim().split(" ")[1]
    
    let decoded;
    try{
        decoded = await verifyToken(token)
    }
    catch(err){
        console.log(err)
        return res.status(400).send({message : "Authorization token not found or incorrect"})
    }

    
    
    
    // decoded part gives us req body and we can compare it as req.user == decode.user
    req.user = decoded.user
    // console.log(req.user)
    // console.log(decoded.user)
    return next()
}

module.exports = authenticate