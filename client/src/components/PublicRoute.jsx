import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  if (userInfo) {

    if (userInfo.role === "student") {
      return <Navigate to="/student-dashboard" replace />;
    }

    if (userInfo.role === "alumni") {
      return <Navigate to="/alumni-dashboard" replace />;
    }

    if (userInfo.role === "admin") {
      return <Navigate to="/admin-dashboard" replace />;
    }
  }

  return children;
}

export default PublicRoute;