const express = require("express");
const bookController = require("../controllers/bookController");

const router = express.Router();

router.get("/recommendations",bookController.getRecomendation)


router.param("id", bookController.checkId);

router
	.route("/")
	.get(bookController.getAllBooks)
	.post(bookController.createNewBook);
router
	.route("/:id")
	.get(bookController.getBook)
	.patch(bookController.updateBook)
	.delete(bookController.deleteBook);



module.exports = router;
