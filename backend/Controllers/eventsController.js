const jwt = require("jsonwebtoken");
const Event = require("../Models/eventModel");
const mongoose = require("mongoose");
const escapeHtml = require("escape-html");
const path = require("path");
const fs = require("fs");

const getEvents = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1 if no page query provided
    const limit = 10; // Set the limit of items per page
    const skip = (page - 1) * limit; // Calculate the number of items to skip

    // Fetch events from the database, sorted by 'createdAt' in descending order
    const events = await Event.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // Optional: Count total number of documents in the 'events' collection
    const totalEvents = await Event.countDocuments();

    // Return the fetched events and pagination details
    return res.status(200).json({
      status: "success",
      data: {
        events,
        pagination: {
          total: totalEvents,
          page,
          lastPage: Math.ceil(totalEvents / limit),
        },
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "fail",
      message: err.message,
    });
    console.log(error);
  }
};

const updateEvent = async (req, res) => {
  try {
    const eventId = req.params.id; // Get the event ID from the URL parameters
    const updates = req.body; // Assuming all necessary fields are passed in the request body

    // Find the event by ID and update it
    const event = await Event.findByIdAndUpdate(eventId, updates, {
      new: true, // Return the modified document rather than the original
    });

    if (!event) {
      return res.status(404).json({
        status: "fail",
        message: "No event found with that ID"
      });
    }

    // Send back the updated event data
    res.status(200).json({
      status: "success",
      data: {
        event
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: err.message
    });
    console.log(error);
  }
};

const addEvent = async (req, res) => {
  try {
    // Extract data from the request body
    const { name, oneLiner, description, time, venue, displayImage } = req.body;

    // Create a new event using the Event model
    const newEvent = new Event({
      name,
      oneLiner,
      description,
      time,
      venue,
      displayImage
    });

    // Save the event to the database
    const savedEvent = await newEvent.save();

    // If new event is saved successfully
    res.status(201).json({
      status: "success",
      data: {
        topic: savedEvent
      }
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message
    });
    console.log(error);
  }
};

const dropEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    if (!eventId) {
      return res.status(400).json({
        status: "fail",
        message: "Event ID is required"
      });
    }

    const event = await Event.findByIdAndDelete(eventId);

    if (!event) {
      return res.status(404).json({
        status: "fail",
        message: "Event not found"
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        event
      }
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message
    });
    console.log(error);
  }
}

const getEventBCC = async (req, res) => {
  try {
    const eventId = req.params.id;

    // Check if the eventId is provided
    if (!eventId) {
      return res.status(400).json({
        status: "fail",
        message: "Event ID is required"
      });
    }

    // Fetch registrations for the given event ID
    const event = await Event.findById(eventId).select('+registrations');
    const registrations = event?.registrations || [];

    // Check if registrations exist
    if (!registrations || registrations.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "No registrations found for this event"
      });
    }

    // Extract emails from the registrations
    const emails = registrations.map(reg => reg.email).join(', ');

    // Define the file directory and path
    const dirPath = path.resolve(__dirname, '../public/bcc');
    const filePath = path.join(dirPath, `event_${eventId}_bcc.txt`);

    // Ensure the directory exists
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Write the emails to a text file
    fs.writeFile(filePath, emails, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          status: "fail",
          message: "Error generating BCC file"
        });
      }

      // Send the file to the client for download
      res.download(filePath, `event_${eventId}_bcc.txt`, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            status: "fail",
            message: "Error downloading BCC file"
          });
        }

        // Optional: Delete the file after download
        fs.unlink(filePath, (err) => {
          if (err) console.log("Error deleting the file after download:", err);
        });
      });
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: "fail",
      message: err.message
    });
  }
};

const registerForEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const { name, email } = req.body;

    // Check if name and email are provided
    if (!name || !email) {
      return res.status(400).json({
        status: "fail",
        message: "Name and Email are required"
      });
    }

    // Find the event by ID and push the new registration into the registrations array
    const event = await Event.findByIdAndUpdate(
      eventId,
      {
        $push: { registrations: { name, email } }
      },
      { new: true, runValidators: true }
    );

    // If event not found, return error
    if (!event) {
      return res.status(404).json({
        status: "fail",
        message: "Event not found"
      });
    }

    // Send a success response with the updated event data
    return res.status(200).json({
      status: "success",
      message: "Successfully registered for the event"
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "fail",
      message: err.message
    });
  }
}


module.exports = {
  getEventBCC,
  registerForEvent,
  updateEvent,
  getEvents,
  addEvent,
  dropEvent
};
