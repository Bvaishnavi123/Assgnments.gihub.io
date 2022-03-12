const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
      id: { type: Number, required: true },
      first_name: { type: String, required: true },
      last_name: { type: String, required: true },
      gender: { type: String, required: true },
      date: { type: String, required: true },
      type: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );
  const User = mogoose.model("user", userSchema);

  module.exports = User;