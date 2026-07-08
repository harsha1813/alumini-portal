const Job = require("../models/Job");
const User = require("../models/User");

const getDashboardStats = async (req, res) => {
  try {

    const jobs = await Job.countDocuments();

    const alumni = await User.countDocuments({
      role: "alumni"
    });

    const students = await User.countDocuments({
      role: "student"
    });

    const companies = await Job.distinct("company");

    res.json({
      jobs,
      alumni,
      students,
      companies: companies.length
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getDashboardStats
};