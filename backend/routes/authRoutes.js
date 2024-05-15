const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/signup", authController.createUser);
router.post("/signin", authController.checkUser);
router.get("/getUser", authController.getUser);

module.exports = router;
