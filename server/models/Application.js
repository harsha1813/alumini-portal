
// const mongoose = require("mongoose");

// const applicationSchema = new mongoose.Schema(
//   {
//     job: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Job",
//       required: true,
//     },

//     student: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },

//     alumni: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },

//     resume: {
//       type: String,
//       default: "",
//     },

//     coverLetter: {
//       type: String,
//       default: "",
//     },

//     status: {
//       type: String,
//       enum: ["Pending", "Accepted", "Rejected"],
//       default: "Pending",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model(
//   "Application",
//   applicationSchema
// );

const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
{
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job",
        required:true
    },

    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    alumni:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    resumeLink:{
        type:mongoose.Schema.Types.ObjectId,
    type:String
},

    status:{
        type:String,
        enum:[
            "Pending",
            "Approved",
            "Rejected"
        ],
        default:"Pending"
    }

},
{
    timestamps:true
}
);

module.exports = mongoose.model(
    "Application",
    applicationSchema
);