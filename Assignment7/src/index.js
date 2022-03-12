const express = require("express");
const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");
// const connect = require("./configs/db");
const app = express();
app.use(express.json());

const User = require("./models/user")
const Students = require("./models/student")
const Batch = require("./models/batch")
const Evaluation = require("./models/evaluation")
const Submission = require("./models/submission")
const Result = require("./models/result")


const submissionController = require("./controller/submission")
const highmarkscontroller = require("./controller/highmarks")


app.use("/highestMarks",highmarkscontroller)
app.use("/submissions",submissionController)

module.exports = app;

// const connect = () => {
//   mogoose.connect("mongodb://127.0.0.1:27017/All_data_collections");
// };

// const userSchema = mongoose.Schema(
//   {
//     id: { type: Number, required: true },
//     first_name: { type: String, required: true },
//     last_name: { type: String, required: true },
//     gender: { type: String, required: true },
//     date: { type: String, required: true },
//     type: { type: String, required: true },
//   },
//   {
//     timestamps: true,
//   }
// );
// const User = mogoose.model("user", userSchema);

// const Studentschema = mongoose.Schema(
//   {
//     roll_id: { type: Number, required: true },
//     batch: { type: Number, required: true },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Students = mogoose.model("student", Studentschema);

// const Batchschema = mongoose.Schema(
//   {
//     batch_name: { type: String, required: true },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Batch = mogoose.model("batch", Batchschema);

// const Evaluationschema = mongoose.Schema(
//   {
//     date: { type: Number, required: true },
//     user_id: {
//       type: mogoose.Schema.Types.ObjectId,
//       ref: "user",
//       required: true,
//     },
//     batch_id: {
//       type: mogoose.Schema.Types.ObjectId,
//       ref: "batch",
//       required: true,
//     },
//   },

//   {
//     timestamps: true,
//   }
// );

// const Evaluation = mogoose.model("evaluation", Evaluationschema);

// const Submissionschenma = mongoose.Schema(
//   {
//     evaluation_id: {
//       type: mogoose.Schema.Types.ObjectId,
//       ref: "evaluation",
//       required: true,
//     },
//     student_id: {
//       type: mogoose.Schema.Types.ObjectId,
//       ref: "student",
//       required: true,
//     },
//     marks: { type: Number, required: true },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Submission = mogoose.model("submission", Submissionschenma);

// const resultSchema = mogoose.Schema({

//   userId :{
//     type : mogoose.Schema.Types.ObjectId,
//     ref : "user",
//     required : true,
//   },
//   score : { type: Number,required: true}
// })
// const Result = mogoose.model("result",resultSchema)

// app.get("/submissions",async (req, res)=>{

//   try {
//     const submission = await Submission.find().populate("evaluation_id").populate("student_id").lean().exec()
//     res.send(submission)
      
//   } catch (error) {
//     console.log(error)
//   }

// })


// app.get("/highestMarks" ,async function(req,res)
// { 
  

//   try {
    
//        const mark = await Result.find({"score":{$gte:60}}).populate("userId").lean().exec()
//        res.send(mark)
//   } catch (error) {
//     console.log(error)
//   }

// })
// {"submissionId.marks" : {$gte:60}}
// app.patch("/highestMarks/:id" ,async function(req,res)
// { 
//   try {
//        const marks = await Result.findByIdAndUpdate(req.params.id,req.body,{new:true});
//        res.send(marks)
//   } catch (error) {
//     console.log(error)
//   }

// })

// app.post("/submissions",async (req, res)=>{

//   try {
//     const submission = await Submission.create(req.body)
//     res.send(submission)
      
//   } catch (error) {
//     console.log(error)
//   }

// })

// app.listen(3000, async () => {
//   try {
//     connect();
//     console.log("listening on 3000");
//   } catch (error) {
//     console.log(error);
//   }
// });
