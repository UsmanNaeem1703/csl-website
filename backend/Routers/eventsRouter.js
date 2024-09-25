const express = require("express");
const authController = require("./../Controllers/authController");
const eventsController = require("./../Controllers/eventsController");

const router = express.Router();

//Routes to use requests received from the client side

router.get("/getEvents", eventsController.getEvents);

router.use(authController.protect);
router.use(authController.restrictTo("events", "admin"));

router.patch("/updateEvent/:id", eventsController.updateEvent);
router.post("/addEvent", eventsController.addEvent);
router.delete("/dropEvent/:id", eventsController.dropEvent);
 /* whats up. its me hasso */ 
 // Hello I am watching valo stream
 // kaam krle, events page is done.
 // Need to improve
 // yes, waiting for gpt to recharge
module.exports = router;
