const express = require("express");
const cors = require("cors");
const connection = require("../../config/db");
const userController = require("../controllers/userController");
const router = express.Router();

// Enable CORS for all routes
router.use(cors());

// Parse JSON bodies for POST requests
router.use(express.json());

// Parse URL-encoded bodies for POST requests
router.use(express.urlencoded({ extended: true }));

router.post("/dataGet", userController.createUser);

router.get("/dataPost", userController.fetchUser);

module.exports = router;
