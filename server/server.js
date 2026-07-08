const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const path = require("path");
const jobRoutes = require("./routes/jobRoutes");
const dashboardRoutes =require("./routes/dashboardRoutes");
const applicationRoutes =require("./routes/applicationRoutes");
// console.log(applicationRoutes);
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.originalUrl}`);
//   next();
// });
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use( "/api/jobs", jobRoutes);
app.use(  "/api/dashboard",  dashboardRoutes);
app.use("/api/applications",applicationRoutes);

app.get("/", (req, res) => {
  res.send("Alumni Portal API Running");
});

const PORT = process.env.PORT || 5000;

app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});