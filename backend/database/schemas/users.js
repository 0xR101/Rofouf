const mongoose = require("mongoose");

// driven attribute is rate

// const commentSchema = new mongoose.Schema({
//   image: String, // URL to image
//   rating: Number,
//   userName: String, // Username of the commenter
//   content: String,
//   date: { type: Date, default: Date.now }
// });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: { type: String, unique: true },
  password: String,
  profileImage: String, // it should be the url of the image
  phoneNumber: String,
  address: String,
  comments: [],

  /// this we will do a join

  // offers: [],
  // listedBooks: [],
});

module.exports = mongoose.model("users", userSchema);

// aggregate.lookup({ from: 'users', localField: 'userId', foreignField: '_id', as: 'users' });
