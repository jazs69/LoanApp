const express = require("express");
const router = express.Router();
const borrowerController = require("../controllers/borrowerController");

router.post("/signup", borrowerController.signup);

module.exports = router;
