
const Application = require("../models/Application");
const Job = require("../models/Job");

// =============================
// Student applies for a job
// =============================

const applyJob = async (req, res) => {

  try {

    const job = await Job.findById(req.params.jobId);

    if (!job) {
      return res.status(404).json({
        message: "Job not found"
      });
    }

    // Prevent duplicate applications
    const alreadyApplied = await Application.findOne({
      job: job._id,
      student: req.user._id
    });

    if (alreadyApplied) {
      return res.status(400).json({
        message: "You have already applied for this job."
      });
    }

    const application = await Application.create({
      job: job._id,
      student: req.user._id,
      alumni: job.postedBy,
      status: "Pending"
    });

    res.status(201).json(application);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// =============================
// Get applicants for a job
// =============================

const getApplicants = async (req, res) => {

  try {

    const applications = await Application.find({
      job: req.params.jobId
    })
      .populate(
        "student",
  "name email graduationYear branch profilePhoto resumeLink github linkedin phone about"
      )
      .sort({ createdAt: -1 });

    res.json(applications);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


const getMyJobsWithApplicants = async (req, res) => {

  try {

    const jobs = await Job.find({
      postedBy: req.user._id
    });

    const result = [];

    for (const job of jobs) {

      const count = await Application.countDocuments({
        job: job._id
      });

      result.push({
        ...job.toObject(),
        applicants: count
      });

    }

    res.json(result);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


const updateApplicationStatus = async (req,res)=>{

try{

const application=await Application.findById(req.params.id);

if(!application){

return res.status(404).json({
message:"Application not found"
});

}

application.status=req.body.status;

await application.save();

res.json(application);

}catch(error){

    console.log("============== ERROR ==============");
        console.log(error);
        console.log("==================================");

res.status(500).json({
message:error.message
});

}

};

// =============================
// Student My Applications
// =============================

const getMyApplications = async (req, res) => {

  try {

   const applications = await Application.find({
  student: req.user._id
})
.populate(
  "job",
  "title company location salary experience description employmentType education skills applyLink"
)
.populate(
  "student",
  "name email graduationYear branch profilePhoto resumeLink linkedin github phone"
)
.sort({
  createdAt: -1
});



// console.log(applications);




    res.json(applications);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


//delete application
const deleteApplication = async (req, res) => {

  try {

    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        message: "Application not found"
      });
    }

    // Only the student who applied can delete it
    if (application.student.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not authorized"
      });
    }

    await application.deleteOne();

    res.json({
      message: "Application deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


module.exports = {
  applyJob,
  getApplicants,
  getMyJobsWithApplicants,
  updateApplicationStatus,
  getMyApplications,
  deleteApplication
};