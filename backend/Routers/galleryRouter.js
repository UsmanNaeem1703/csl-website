const express = require("express");
const authController = require("./../Controllers/authController");
const categoryController = require("./../Controllers/categoryController");

const router = express.Router();

//Routes to use requests received from the client side

router.use(authController.protect);

router.get("/getCategories", categoryController.getCategories);

router.use(authController.restrictTo("admin"));

router.get("/getAllCategories", categoryController.getAllCategories);
router.get("/getSubCategories", categoryController.getSubCategories);
router.get("/searchSubCategory", categoryController.searchCategories);
router.post("/updateSubCategory", categoryController.updateSubCategory);
router.post("/addCategory", categoryController.addCategory);
router.post("/addSubCategory", categoryController.addSubCategory);
router.post("/addSubCategories", categoryController.addSubCategories);
router.get("/getTopics", categoryController.getTopics);
router.post("/addTopic", categoryController.addTopic);
router.delete("/dropTopic", categoryController.dropTopic);
router.patch("/addRefSubCategory", categoryController.addRefSubCategory);
router.patch("/addRefCategory", categoryController.addRefCategory);
router.patch("/deleteRefSubCategory", categoryController.deleteRefSubCategory);

module.exports = router;
