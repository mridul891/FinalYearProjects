const mongoose = require("mongoose");

const SignUpSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  uniqueId: {
    type: String,
    required: true,
  }
});

export const signUp = mongoose.model("signup", SignUpSchema);


const SigninSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
})

export const signIn = mongoose.model("singin" , SigninSchema)