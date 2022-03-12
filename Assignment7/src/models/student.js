const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const Studentschema = mongoose.Schema(
    {
      roll_id: { type: Number, required: true },
      batch: { type: Number, required: true },
    },
    {
      timestamps: true,
    }
  );
  
  const Students = mogoose.model("student", Studentschema);

  module.exports=Students;