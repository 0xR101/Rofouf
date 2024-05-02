const bookController = require("./../controllers/bookController");
const express = require("express");

const router = express.Router();

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
