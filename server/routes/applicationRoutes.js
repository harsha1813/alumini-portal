
const express = require("express");
const router = express.Router();

const {
  applyJob,
  getApplicants,
  getMyJobsWithApplicants,
  updateApplicationStatus,
  getMyApplications,
  deleteApplication
} = require("../controllers/applicationController");

const {
  protect,
} = require("../middleware/authMiddleware");

router.get("/test", (req, res) => {
  res.json({
    message: "Application Route Working"
  });
});

router.post(
  "/:jobId",
  protect,
  applyJob
);

router.get(
  "/job/:jobId",
  protect,
  getApplicants
);

router.get(
  "/my-jobs",
  protect,
  getMyJobsWithApplicants
);
router.put(
"/status/:id",
protect,
updateApplicationStatus
);
router.get(
  "/student",
  protect,
  getMyApplications
);
router.delete(
  "/:id",
  protect,
  deleteApplication
);


module.exports = router;