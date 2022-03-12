const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose")

const Submissionschenma = mongoose.Schema(
    {
      evaluation_id: {
        type: mogoose.Schema.Types.ObjectId,
        ref: "evaluation",
        required: true,
      },
      student_id: {
        type: mogoose.Schema.Types.ObjectId,
        ref: "student",
        required: true,
      },
      marks: { type: Number, required: true },
    },
    {
      timestamps: true,
    }
  );
  
  const Submission = mogoose.model("submission", Submissionschenma);

  module.exports = Submission