const express = require("express");
const router = express.Router();


const authController = require("../controllers/authController");

router.post("/signup", authController.createUser);
router.post("/signin", authController.checkUser);

module.exports = router;
