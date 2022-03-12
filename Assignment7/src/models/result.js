const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose")

const resultSchema = mogoose.Schema({

    userId :{
      type : mogoose.Schema.Types.ObjectId,
      ref : "user",
      required : true,
    },
    score : { type: Number,required: true}
  })
  const Result = mogoose.model("result",resultSchema)

  module.exports = Result;