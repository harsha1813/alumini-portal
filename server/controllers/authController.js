const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// ==============================
// Register
// ==============================
const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role,
      graduationYear,
      branch,
      company,
      designation
    } = req.body;

    // Prevent admin registration
    if (role === "admin") {
      return res.status(403).json({
        message: "Admin account cannot be created."
      });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists. Please login."
      });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      graduationYear,
      branch,
      company,
      designation
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id)
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error"
    });

  }
};

// ==============================
// Login
// ==============================
const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    // Check whether email exists
    const user = await User.findOne({ email });

    if (!user) {

      return res.status(404).json({
        message: "User not registered. Please register first."
      });

    }

    // Check password
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(401).json({
        message: "Invalid email or password."
      });

    }

//  else {

//   if (!user) {
//     return res.status(404).json({
//       message: "Account not found. Please register first."
//     });
//   }

//   return res.status(401).json({
//     message: "Incorrect password."
//   });

// }


    // Login success
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id)
    });

  }

  catch (error) {

    res.status(500).json({
      message: "Server Error"
    });

  }

};

module.exports = {
  registerUser,
  loginUser
};

console.log("Auth Controller Loaded");