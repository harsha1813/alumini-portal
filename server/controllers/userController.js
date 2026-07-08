const User = require("../models/User");

// Get Profile
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Update Profile
const updateProfile = async (req, res) => {

    try {

        console.log("===== REQUEST BODY =====");
        console.log(req.body);

        const user = await User.findById(req.user._id);

        console.log("===== BEFORE =====");
        console.log(user);

        user.name = req.body.name || user.name;
        user.phone = req.body.phone || "";
        user.branch = req.body.branch || "";
        user.graduationYear = req.body.graduationYear || "";
        user.resumeLink = req.body.resumeLink || "";
        user.linkedin = req.body.linkedin || "";
        user.github = req.body.github || "";
        user.about = req.body.about || "";

        await user.save();

        console.log("===== AFTER =====");
        console.log(user);

        res.json(user);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

};


// Get All Users
const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

//upload image
const uploadProfilePhoto = async (
  req,
  res
) => {
  try {

    // console.log("FILE:", req.file);
    // console.log("BODY:", req.body);

    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded"
      });
    }

    const user = await User.findById(
      req.user._id
    );

    user.profilePhoto =
      `/uploads/${req.file.filename}`;

    await user.save();

    res.json({
      message:
        "Profile photo uploaded successfully",
      profilePhoto:
        user.profilePhoto
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message
    });
  }
};




module.exports = {
  getProfile,
  updateProfile,
  getUsers,
  uploadProfilePhoto
};