const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const connect = () => {
  mongoose.connect(
    "mongodb+srv://vaishnvai:vaishnavi@cluster0.wuv5g.mongodb.net/books_data?retryWrites=true&w=majority"
  );
};

const userSchema = mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
});

const User = mongoose.model("user", userSchema);

const bookSchema = mongoose.Schema({
  SectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "section",
    require: true,
  },
  name: { type: String, required: true },
  body: { type: String, required: true },
});

const Book = mongoose.model("book", bookSchema);

const authorSchema = mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    require: true,
  },
});

const Author = mongoose.model("author", authorSchema);

const SectionSchema = mongoose.Schema({
  name: { type: String, required: true },
});

const Section = mongoose.model("section", SectionSchema);

const book_Author = mongoose.Schema({
  BookId: { type: mongoose.Schema.Types.ObjectId, ref: "book", require: true },
  AuthorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "author",
    require: true,
  },
});

const bookAuthor = mongoose.model("bookauthor", book_Author);

const checkout = mongoose.Schema({
  BookId: { type: mongoose.Schema.Types.ObjectId, ref: "book", require: true },
  AuthorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "author",
    require: true,
  },
  checkIn: { type: Boolean, required: true, default: null },
  checkOut: { type: Boolean, required: true, default: null },
});
const Check = mongoose.model("check", checkout);

// app.get("/checkout", async (req, res)=>{
//     const c = await Check.find().lean().exec()
//     res.send(c)
// })

app.get("/books/:author", async (req, res) => {
  try {
    const bookbyauthor = await bookAuthor
      .find({ AuthorID: req.params.author })
      .populate({
        path: "AuthorID",
      }).populate({ path:"BookId"})
      .lean()
      .exec();
    res.send(bookbyauthor);
  } catch (error) {
    console.log(error);
  }
});

app.get("/books/:section", async (req, res) => {
  try {
    const books = await Book.find({$and :[{"BookId.SectionId":{$eq : req.params.section}},{"checkOut":{$ne : "null"}}]}).populate("SectionId")
      .lean()
      .exec();
    res.send(books);
  } catch (error) {
    console.log(error);
  }
});

app.get("/check/:section", async (req, res) => {
  try {
    const books = await Check.find({"checkOut" :{$ne :"null"}}).populate("SectionId")
      .lean()
      .exec();
    res.send(books);
  } catch (error) {
    console.log(error);
  }
});

app.get("/check", async (req, res) => {
  try {
    const books = await Check.find({"checkOut" :{$ne :"null"}}).populate("SectionId")
      .lean()
      .exec();
    res.send(books);
  } catch (error) {
    console.log(error);
  }
});




app.listen(3000, async () => {
  try {
    await connect();
    console.log("Listening on port 3000");
  } catch (error) {
    console.log(error);
  }
});
