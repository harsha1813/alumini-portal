
const express = require("express");
const router =  express.Router();
const {
  createJob,
  getJobs,
  updateJob,
  deleteJob,
  getJobFilters,
  getJobById
} = require("../controllers/jobController");

const {
  protect
} = require(
  "../middleware/authMiddleware"
);

// const {
//   createJob,
//   getJobs,
//   updateJob
// } = require("../controllers/jobController");

router.post("/", protect, createJob);

router.get("/filters", protect, getJobFilters);

router.get("/", protect, getJobs);

router.get("/:id", protect, getJobById);

router.put("/:id", protect, updateJob);

router.delete("/:id", protect, deleteJob);

module.exports = router;