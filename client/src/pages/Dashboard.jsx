// import { useEffect, useState } from "react";
// import { getDashboardStats } from "../services/dashboardService";

// function Dashboard() {

//   const [stats, setStats] = useState({
//     jobs: 0,
//     alumni: 0,
//     students: 0,
//     companies: 0
//   });

//   useEffect(() => {

//     const fetchStats = async () => {

//       try {

//         const data =
//         await getDashboardStats();

//         setStats(data);

//       } catch (error) {

//         console.log(error);

//       }

//     };

//     fetchStats();

//   }, []);

//   return (

//     <div
//       style={{
//         padding: "40px",
//         background: "#f4f6f9",
//         minHeight: "100vh"
//       }}
//     >

//       <h1>Dashboard</h1>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns:
//             "repeat(auto-fit,minmax(220px,1fr))",
//           gap: "20px",
//           marginTop: "30px"
//         }}
//       >

//         <Card
//           title="Jobs Posted"
//           value={stats.jobs}
//         />

//         <Card
//           title="Total Alumni"
//           value={stats.alumni}
//         />

//         <Card
//           title="Students"
//           value={stats.students}
//         />

//         <Card
//           title="Companies"
//           value={stats.companies}
//         />

//       </div>

//     </div>

//   );

// }

// function Card({ title, value }) {

//   return (

//     <div
//       style={{
//         background: "#fff",
//         padding: "25px",
//         borderRadius: "12px",
//         boxShadow:
//           "0 4px 12px rgba(0,0,0,.1)",
//         textAlign: "center"
//       }}
//     >

//       <h3>{title}</h3>

//       <h1
//         style={{
//           color: "#2563eb"
//         }}
//       >
//         {value}
//       </h1>

//     </div>

//   );

// }

// export default Dashboard;

import { Navigate } from "react-router-dom";

function Dashboard() {

  const user = JSON.parse(
    localStorage.getItem("userInfo")
  );

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role === "student") {
    return <Navigate to="/student-dashboard" replace />;
  }

  if (user.role === "alumni") {
    return <Navigate to="/alumni-dashboard" replace />;
  }

  if (user.role === "admin") {
    return <Navigate to="/admin-dashboard" replace />;
  }

  return <Navigate to="/login" replace />;

}

export default Dashboard;