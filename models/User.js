const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please, provide a name"]
  },
  email: {
    type: String,
    required: [true, "please, provide an email"],
    unique: [true, "This email is already register"]
  },
  password: {
    type: String,
    required: [true, "Please, provide a password"]
  }
});

// create a user table or collection if there is no table with that name already
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);