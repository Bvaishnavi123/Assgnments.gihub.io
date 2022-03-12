const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose")

const Batchschema = mongoose.Schema(
    {
      batch_name: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );
  
  const Batch = mogoose.model("batch", Batchschema);

  module.exports = Batch;