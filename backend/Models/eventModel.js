const mongoose = require("mongoose");
const validator = require("validator");

const eventSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Enter Event Name."],
            trim: true
        },
        oneLiner: {
            type: String,
            trim: true,
            required: [true, "Please Enter Event One-Liner"],
            maxlength: [150, "One-Liner should not exceed 150 characters"]
        },
        description: {
            type: String,
            trim: true,
            default: "No Description",
        },
        time: {
            type: Date,
            required: [true, "Please Enter Event Time"]
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
        registrations: {
            type: [{
                name: {
                    type: String,
                    required: [true, "Please Enter Name."],
                    trim: true
                },
                email: {
                    type: String,
                    required: [true, "Please Enter Email."],
                    trim: true,
                    lowercase: true,
                    validate: [validator.isEmail, "Please Enter a Valid Email."],
                    match: [/^[a-zA-Z0-9._%+-]+@(nu\.edu\.pk|isb\.nu\.edu\.pk)$/, "Please enter a valid NU email (e.g., @nu.edu.pk or @isb.nu.edu.pk)."]
                }
            }],
            default: [],
            select: false,
            unique: true,
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
