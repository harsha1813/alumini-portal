const Job = require("../models/Job");

// ===============================
// Create Job
// ===============================

const createJob = async (req, res) => {
  try {

    if (
      req.user.role !== "alumni" &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        message: "Only alumni/admin can post jobs."
      });
    }

    const job = await Job.create({
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      salary: req.body.salary,
      experience: req.body.experience,
      employmentType: req.body.employmentType,
      education: req.body.education,
      skills: req.body.skills || [],


      // skills: req.body.skills
      //   ? req.body.skills
      //       .split(",")
      //       .map(skill => skill.trim())
      //   : [],

      description: req.body.description,

      // Google Drive / Google Form / Company Career Link
      applyLink: req.body.applyLink,

      postedBy: req.user._id
    });

    res.status(201).json(job);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }
};

// ===============================
// Update Job
// ===============================

const updateJob = async (req, res) => {

  try {

    if (
      req.user.role !== "alumni" &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        message: "Unauthorized"
      });
    }

    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        message: "Job not found"
      });
    }

    if (
      job.postedBy.toString() !==
      req.user._id.toString()
    ) {
      return res.status(401).json({
        message: "Not authorized"
      });
    }

    job.title = req.body.title;
    job.company = req.body.company;
    job.location = req.body.location;
    job.salary = req.body.salary;
    job.experience = req.body.experience;
    job.education = req.body.education;
    job.employmentType = req.body.employmentType;
    job.description = req.body.description;

    job.applyLink = req.body.applyLink;

    if (Array.isArray(req.body.skills)) {

  job.skills = req.body.skills;

} else {

  job.skills = req.body.skills
    ? req.body.skills
        .split(",")
        .map(skill => skill.trim())
    : [];

}

    const updatedJob = await job.save();

    res.json(updatedJob);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }

};

// ===============================
// Delete Job
// ===============================

const deleteJob = async (req, res) => {

  try {

    if (
      req.user.role !== "alumni" &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        message: "Unauthorized"
      });
    }

    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        message: "Job not found"
      });
    }

    if (
      job.postedBy.toString() !==
      req.user._id.toString()
    ) {
      return res.status(401).json({
        message: "Not authorized"
      });
    }

    await job.deleteOne();

    res.json({
      message: "Job deleted successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }

};

// ===============================
// Get All Jobs
// ===============================

const getJobs = async (req, res) => {

  try {

    const search = req.query.search || "";
    const company = req.query.company || "";
    const location = req.query.location || "";
    const sort = req.query.sort || "newest";

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;

    const filter = {};

    if (search) {

      filter.$or = [

        {
          title: {
            $regex: search,
            $options: "i"
          }
        },

        {
          company: {
            $regex: search,
            $options: "i"
          }
        },

        {
          location: {
            $regex: search,
            $options: "i"
          }
        }

      ];

    }

    if (company) {
      filter.company = company;
    }

    if (location) {
      filter.location = location;
    }

    const sortOption =
      sort === "oldest"
        ? { createdAt: 1 }
        : { createdAt: -1 };

    const totalJobs =
      await Job.countDocuments(filter);

    const jobs = await Job.find(filter)
      .populate(
        "postedBy",
        "name email"
      )
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({

      jobs,

      currentPage: page,

      totalPages: Math.ceil(
        totalJobs / limit
      ),

      totalJobs

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }

};

// ===============================
// Job Filters
// ===============================

const getJobFilters = async (req, res) => {

  try {

    const companies =
      await Job.distinct("company");

    const locations =
      await Job.distinct("location");

    res.json({
      companies,
      locations
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }

};

// ===============================
// Get Job By ID
// ===============================

const getJobById = async (req, res) => {

  try {

    const job = await Job.findById(req.params.id)
      .populate(
        "postedBy",
        "name email"
      );

    if (!job) {
      return res.status(404).json({
        message: "Job not found"
      });
    }

    res.json(job);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }

};

module.exports = {

  createJob,
  updateJob,
  deleteJob,
  getJobs,
  getJobById,
  getJobFilters

};