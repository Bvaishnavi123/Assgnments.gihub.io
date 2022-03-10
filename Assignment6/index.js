// mongodb+srv:mongodb+srv://vaishnvai:vaishnvai@cluster0.wuv5g.mongodb.net/books_data?retryWrites=true&w=majority
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const connect = () => {
  mongoose.connect(
    "mongodb+srv://vaishnvai:vaishnavi@cluster0.wuv5g.mongodb.net/books_data?retryWrites=true&w=majority"
  );
};

const authorSchema = mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
  },
  {
    timestamp: true,
  }
);

const Author = mongoose.model("author", authorSchema);

const bookSchema = mongoose.Schema(
  {
    book_name: { type: String, required: true },
    body: { type: String, required: true },
    section: { type: String, required: true },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("book", bookSchema);

const sectionSchema = mongoose.Schema(
  {
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
      required: true,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamp: true,
  }
);

const Section = mongoose.model("section", sectionSchema);

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find().lean().exec();
    res.send({ Books: books });
  } catch (error) {
    return res.status(404).send("not found");
  }
});

app.post("/books", async function (req, res) {
  try {
    const book = await Book.create(req.body);
    res.send({ book: book });
  } catch (error) {
    return res.status(404).send("not found");
  }
});

app.get("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.send({ book: book });
  } catch (error) {
    return res.status(404).send("not found");
  }
});

app.patch("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send({ book: book });
  } catch (error) {
    return res.status(404).send("not found");
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.i);
    res.send({ book: book });
  } catch (error) {
    return res.status(404).send("not found");
  }
});

app.get("/author", async (req, res) => {
  try {
    const Authors = await Author.find().lean().exec();
    res.send({ Authors: Authors });
  } catch (error) {
    return res.status(404).send("not found");
  }
});

app.post("/author", async (req, res) => {
  try {
    const Authors = await Author.create(req.body);
    res.send({ Authors: Authors });
  } catch (error) {
    return res.status(404).send("not found");
  }
});
app.patch("/author/:id", async (req, res) => {
  try {
    const Authors = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send({ Authors: Authors });
  } catch (error) {
    return res.status(404).send("not found");
  }
});
app.get("/author/:id", async (req, res) => {
  try {
    const Authors = await Author.findById(req.params.id);
    res.send({ Authors: Authors });
  } catch (error) {
    return res.status(404).send("not found");
  }
});
app.delete("/author/:id", async (req, res) => {
  try {
    const Authors = await Authors.findByIdAndDelete(req.params.i);
    res.send({ book: book });
  } catch (error) {
    return res.status(404).send("not found");
  }
});
app.get("/section", async (req, res) => {
  try {
    const Sections = await Section.find().lean().exec();
    res.send({ Section: Sections });
  } catch (error) {
    return res.status(404).send("not found");
  }
});

app.post("/section", async (req, res) => {
  try {
    const Sections = await Section.create(req.body);
    res.send({ Section: Sections });
  } catch (error) {
    return res.status(404).send("not found");
  }
});
app.patch("/section/:id", async (req, res) => {
  try {
    const Sections = await Section.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send({ Section: Sections });
  } catch (error) {
    return res.status(404).send("not found");
  }
});
app.get("/section/:id", async (req, res) => {
  try {
    const Sections = await Section.findById(req.params.id);
    res.send({ Section: Sections });
  } catch (error) {
    return res.status(404).send("not found");
  }
});
app.delete("/section/:id", async (req, res) => {
  try {
    const Sections = await Section.findByIdAndDelete(req.params.i);
    res.send({ Section: Sections });
  } catch (error) {
    return res.status(404).send("not found");
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
