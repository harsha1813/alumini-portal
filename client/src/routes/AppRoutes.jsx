import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import AlumniDirectory from "../pages/AluminiDirectory";
import Profile from "../pages/Profile";
import Jobs from "../pages/Jobs";
import JobDetails from "../pages/JobDetails";
import MainLayout from "../layouts/MainLayout";
import StudentDashboard from "../pages/StudentDashboard";
import AlumniDashboard from "../pages/AlumniDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import Applicants from "../pages/Applicants";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";
import JobApplicants from "../pages/JobApplicants";
import MyApplications from "../pages/MyApplications";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

  {/* Public Routes */}

  <Route path="/" element={<Home />} />

  <Route
    path="/login"
    element={
      <PublicRoute>
        <Login />
      </PublicRoute>
    }
  />

  <Route
    path="/register"
    element={
      <PublicRoute>
        <Register />
      </PublicRoute>
    }
  />



  {/* Protected Layout */}

  <Route
    element={
      <ProtectedRoute
        allowedRoles={[
          "student",
          "alumni",
          "admin"
        ]}
      >
        <MainLayout />
      </ProtectedRoute>
    }
  >

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/student-dashboard"
        element={<StudentDashboard />}
      />

      <Route
        path="/alumni-dashboard"
        element={<AlumniDashboard />}
      />

      <Route
        path="/admin-dashboard"
        element={<AdminDashboard />}
      />

      <Route
        path="/jobs"
        element={<Jobs />}
      />

      <Route
        path="/jobs/:id"
        element={<JobDetails />}
      />

      <Route
        path="/directory"
        element={<AlumniDirectory />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />
    <Route
  path="/my-applications"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <MyApplications />
    </ProtectedRoute>
  }
/>

<Route
  path="/applications"
  element={
    <ProtectedRoute allowedRoles={["alumni","admin"]}>
      <Applicants />
    </ProtectedRoute>
  }
/>

<Route
  path="/applications/:jobId"
  element={
    <ProtectedRoute allowedRoles={["alumni","admin"]}>
      <JobApplicants />
    </ProtectedRoute>
  }
/>



  </Route>

</Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;