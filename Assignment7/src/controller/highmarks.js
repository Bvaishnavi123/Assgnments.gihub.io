const express = require("express");
const app = express();
const resultModel = require("../models/result");

app.get("/", async function (req, res) {
  try {
    const mark = await resultModel
      .find({ score: { $gte: 60 } })
      .populate("userId")
      .lean()
      .exec();
    res.send(mark);
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
