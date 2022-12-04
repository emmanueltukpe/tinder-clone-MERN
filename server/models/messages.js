const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    from_user_id: {
      type: String,
      required: true,
    },
    to_user_id: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
