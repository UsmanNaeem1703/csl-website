const express = require("express");
const imageController = require("../Controllers/imageController");
const authController = require("../Controllers/authController");

const router = express.Router();

//Routes to use requests received from the client side

router.post('/upload-image', imageController.uploadImage, imageController.resizeImage);

module.exports = router;

