const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  image: String, // URL to image
  title: String,
  description: String,
  ISBN: { type: String, unique: true }, // it should be unique
  listingDate: Date,
  author: String,
  genre: [String],
  offerType: String,
  bookCondition: String,
  price: Number,
  oldPrice: Number,
  seller: String, // User name of the seller
  numberOfPages: Number,
  comments: [], // Array of comment IDs
  offerStatus: String, // we can extract (selled bought exchanged or active)
});



module.exports = mongoose.model("books", bookSchema);

// exports.addCommentToBook = (id) =>{


// }





