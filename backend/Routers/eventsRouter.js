const express = require("express");
const authController = require("./../Controllers/authController");
const eventsController = require("./../Controllers/eventsController");

const router = express.Router();

//Routes to use requests received from the client side

router.get("/getEvents", eventsController.getEvents);
router.post("/registerForEvent/:id", eventsController.registerForEvent);

router.use(authController.protect);
router.use(authController.restrictTo("events", "admin"));

router.get("/getEventBCC/:id", eventsController.getEventBCC);
router.patch("/updateEvent/:id", eventsController.updateEvent);
router.post("/addEvent", eventsController.addEvent);
router.delete("/dropEvent/:id", eventsController.dropEvent);

module.exports = router;
