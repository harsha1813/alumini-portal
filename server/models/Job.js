const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    company: {
      type: String,
      required: true
    },

    location: {
      type: String,
      required: true
    },

    salary: {
      type: String,
      default: "Not Disclosed"
    },

    experience: {
      type: String,
      default: "Fresher"
    },

    employmentType: {
      type: String,
      enum: [
        "Full Time",
        "Part Time",
        "Internship",
        "Contract",
        "Remote"
      ],
      default: "Full Time"
    },

    skills: [
      {
        type: String
      }
    ],

    description: {
      type: String,
      required: true
    },

    applyLink: {
      type: String,
      required: true
    },

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Job", jobSchema);