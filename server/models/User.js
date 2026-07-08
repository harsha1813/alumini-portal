const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["student", "alumni", "admin"],
        default: "student"
    },
    profilePhoto: {
  type: String,
  default: ""
},

    graduationYear: String,

    branch: String,

    company: String,

    designation: String,
    resumeLink: {
    type: String,
    default: ""
},

phone: {
    type: String,
    default: ""
},

linkedin: {
    type: String,
    default: ""
},

github: {
    type: String,
    default: ""
},

about: {
    type: String,
    default: ""
},

    // profilePhoto: String
},
{
    timestamps: true
}
);

module.exports = mongoose.model("User", userSchema);