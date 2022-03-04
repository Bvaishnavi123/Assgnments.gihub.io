let express = require("express");
let app = express();
app.use(allbooks);
// midware is get into use if we do app.use(function_name)
// we can pass midware as a parameter also such as ("path","midware","callBack function")
// The Most Important Thing In Parameter Section Request comes first and responce come second
app.get("/books", function (req, res) {
  res.send("Fetching all the data of books");
});

app.get("/book/:name", (req, res) => {
  res.send({ BookName: req.params.name });
});
// 1) Request is a object which has some key or property or we can add it by our side
// 2) To see the path we can do req.path
// 3) If we add some parameter to our URL we just have to add varible as :name that means 
// name is stored in object called req.params and we can access it as req.params.name
function allbooks(req, res, next) {
  console.log("Fetching all the data of books");
  next();
}

app.listen(4000, () => {
  console.log("We Are Listening On 4000");
});
