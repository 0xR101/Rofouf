const express = require("express");
const bookController = require("../controllers/bookController");
const fileSystem = require("../file/fileSystem");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/recommendations", bookController.getRecomendation);

router.param("id", bookController.checkId);

router
	.route("/")
	.get(bookController.getAllBooks)
	.post(protect, fileSystem.uploadCover(), bookController.createNewBook);
router
	.route("/:id")
	.get(bookController.getBook)
	.patch(bookController.updateBook)
	.delete(bookController.deleteBook);

module.exports = router;
