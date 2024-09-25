const express = require("express");
const userController = require("./../Controllers/userController");
const authController = require("./../Controllers/authController");

const router = express.Router();

//Routes to use requests received from the client side
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

router.use(authController.protect);

router.get("/me", userController.getuserbyId);

module.exports = router;


// http://127.0.0.1:8080/api/v1/users/login POST {email, password}