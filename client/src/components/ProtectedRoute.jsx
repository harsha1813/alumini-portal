import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  // Not logged in
  if (!userInfo) {
    return <Navigate to="/login" replace />;
  }

  // Logged in but wrong role
  if (!allowedRoles.includes(userInfo.role)) {
    return <Navigate to="/" replace />;
  }

  // Authorized
  return children;
}

export default ProtectedRoute;