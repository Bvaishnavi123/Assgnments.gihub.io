const authrization =(permissionsdata)=>
{
   return function(req,res,next)
   {
      // getting user
      const user = req.user
      let Ispermission = false
      // console.log(permissionsdata)
      // checking user has permission or not
      permissionsdata.map(role =>
      {
        if(user.role.includes(role))
        {
          Ispermission = true
        }
      })
      // If permission is given then go a head else throw error
     if(Ispermission)
     {
        return next();
     }
     else{
      
     return res.send("Permission denied")

     }
   }
}

module.exports = authrization