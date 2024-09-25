const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Enter Event Name."],
            trim: true
        },
        description: {
            type: String,
            trim: true,
            default: "No Description",
        },
        time: {
            type: Date,
            required: [true, "Please Enter Event Time"],
        },
        venue: {
            type: String,
            required: [true, "Please Enter Event Venue"],
        },
        displayImage: {
            type: String,
            match: [
                /(https?:\/\/)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}(\/.*)?(\?[a-zA-Z0-9]+=.*)?$/,
                "Please Enter a valid URL for the Event Image",
            ],
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
    { collection: "events" }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
