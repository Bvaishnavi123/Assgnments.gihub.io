const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose")


const Evaluationschema = mongoose.Schema(
    {
      date: { type: Number, required: true },
      user_id: {
        type: mogoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      batch_id: {
        type: mogoose.Schema.Types.ObjectId,
        ref: "batch",
        required: true,
      },
    },
  
    {
      timestamps: true,
    }
  );
  
  const Evaluation = mogoose.model("evaluation", Evaluationschema);

  module.exports = Evaluation;