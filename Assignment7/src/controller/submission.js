const express = require("express");
const app = express();
const sub = require("../models/submission")

app.get("/",async (req, res)=>{

    try {
      const submission = await sub.find().populate("evaluation_id").populate("student_id").lean().exec()
      res.send(submission)
        
    } catch (error) {
      console.log(error)
    }
  
  })

  module.exports = app;