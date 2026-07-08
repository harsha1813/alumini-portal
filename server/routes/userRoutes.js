const express = require("express");
const router = express.Router();

const {
  getProfile,
  updateProfile,
  getUsers,
  uploadProfilePhoto
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

const upload = require(
  "../middleware/uploadMiddleware"
);

router.get("/profile", protect, getProfile);

router.put("/profile", protect, updateProfile);

router.get("/", protect, getUsers);

router.post(
  "/upload",
  protect,
  upload.single("image"),
  uploadProfilePhoto
);

module.exports = router;