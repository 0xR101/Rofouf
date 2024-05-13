const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
	image: String, // URL to image
	title: String,
	description: String,
	ISBN: [{ type: String, unique: false }], // it should be unique
	listingDate: Date,
	author: String,
	genre: [String],
	offerType: String,
	bookCondition: String,
	price: Number,
	oldPrice: Number,
	seller: String, // User name of the seller
	numberOfPages: Number,
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }], // Array of comment IDs
	offerStatus: String, // we can extract (selled bought exchanged or active)
});

module.exports = mongoose.model("Book", bookSchema);

// exports.addCommentToBook = (id) =>{

// }
