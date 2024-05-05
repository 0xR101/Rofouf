const mongoose = require("mongoose");

// driven attribute is rate

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  profileImage: String, // it should be the url of the image
  phoneNumber: String,
  address: String,
  comments: [
    {
      image: String, // URL to image
      rating: Number,
      userName: String, // Username of of the commenter
      content: String,
      date: Date,
    },
  ],
  offers: [],
  listedBooks: [],
});

module.exports = mongoose.model("users", userSchema);
