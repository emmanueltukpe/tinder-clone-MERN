const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashed_password: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
  dob_day: {
    type: Number,
  },
  dob_month: {
    type: Number,
  },
  dob_year: {
    type: Number,
  },
  first_name: {
    type: String,
  },
  gender_identity: {
    type: String,
  },
  gender_interest: {
    type: String,
  },
  matches: {
    type: Array,
  },
  show_gender: {
    type: Boolean,
  },
  url: {
    type: String,
  },
});
module.exports = mongoose.model("Users", UsersSchema);
