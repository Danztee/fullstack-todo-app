const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A todo must have a name"],
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);
