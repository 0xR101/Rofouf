const User = require("../database/schemas/users");
const Book = require("../database/schemas/books");
const Comment = require("../database/schemas/comments");

exports.getComment = async (req, res) => {
	try {
		const commentId = req.body.id;

		const comment = await Comment.findOne({ commentId });

		if (comment) {
			res.status(200).json(comment);
		} else {
			res.status(404).json({ error: "Comment not found" });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
};

exports.addComment = async (req,res) => {

    


};
