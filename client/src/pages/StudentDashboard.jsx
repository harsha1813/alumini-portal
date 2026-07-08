// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import StatCard from "../components/StatCard";
// import { getDashboardStats } from "../services/dashboardService";

// function StudentDashboard() {
//   const [stats, setStats] = useState(null);

//   const navigate = useNavigate();

//   const userInfo = JSON.parse(
//     localStorage.getItem("userInfo")
//   );

//   useEffect(() => {
//     loadDashboard();
//   }, []);

//   const loadDashboard = async () => {
//     try {
//       const data = await getDashboardStats();
//       setStats(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (!stats) {
//   return (
//     <div>
//       <h2>Loading...</h2>
//     </div>
//   );
// }

//   return (
//     <>

//       <h1>
//         Welcome, {userInfo.name} 👋
//       </h1>

//       <p>
//         Here's what's happening today.
//       </p>

//       {/* Statistics Cards */}

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
//           gap: "20px",
//           marginTop: "30px"
//         }}
//       >
//         <StatCard
//           title="Jobs Available"
//           value={stats.totalJobs}
//           color="#2563eb"
//         />

//         <StatCard
//           title="Alumni"
//           value={stats.totalAlumni}
//           color="#16a34a"
//         />

//         <StatCard
//           title="Students"
//           value={stats.totalStudents}
//           color="#ea580c"
//         />

//         <StatCard
//           title="Events"
//           value={stats.totalEvents || 0}
//           color="#9333ea"
//         />
//       </div>

//       {/* Bottom Section */}

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "2fr 1fr",
//           gap: "25px",
//           marginTop: "40px"
//         }}
//       >

//         {/* Latest Jobs */}

//         <div style={boxStyle}>

//           <h2>Latest Jobs</h2>

//           <p>
//             Latest job postings will appear here.
//           </p>

//         </div>

//         {/* Quick Actions */}

//         <div style={boxStyle}>

//           <h2>Quick Actions</h2>

//           <button
//             style={actionButton}
//             onClick={() => navigate("/jobs")}
//           >
//             Browse Jobs
//           </button>

//           <button
//             style={actionButton}
//             onClick={() => navigate("/directory")}
//           >
//             Alumni Directory
//           </button>

//           <button
//             style={actionButton}
//             onClick={() => navigate("/profile")}
//           >
//             My Profile
//           </button>

//         </div>

//       </div>
//       </>
//   );
// }

// const boxStyle = {
//   background: "#fff",
//   padding: "25px",
//   borderRadius: "12px",
//   boxShadow: "0 4px 12px rgba(0,0,0,.08)"
// };

// const actionButton = {
//   width: "100%",
//   padding: "12px",
//   marginBottom: "15px",
//   border: "none",
//   borderRadius: "8px",
//   background: "#2563eb",
//   color: "#fff",
//   cursor: "pointer",
//   fontWeight: "bold",
//   fontSize: "15px"
// };

// export default StudentDashboard;



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StatCard from "../components/StatCard";
import { getDashboardStats } from "../services/dashboardService";

function StudentDashboard() {

  const [stats, setStats] = useState(null);

  const navigate = useNavigate();

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );


  useEffect(() => {
    loadDashboard();
  }, []);


  const loadDashboard = async () => {

    try {

      const data = await getDashboardStats();

      setStats(data);

    } catch (error) {

      console.log(error);

    }

  };


  if (!stats) {

    return (

      <div
        style={{
          minHeight:"60vh",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          background:"#f8fafc",
          fontFamily:"Inter, Segoe UI, sans-serif"
        }}
      >

        <h2 style={{color:"#2563eb"}}>
          Loading Dashboard...
        </h2>

      </div>

    );

  }



  return (

    <div

      style={{
        width:"100%",
        background:"#f8fafc",
        fontFamily:"Inter, Segoe UI, sans-serif"
      }}

    >


      {/* Welcome Banner */}

      <div

        style={{

          background:
          "linear-gradient(135deg,#2563eb,#4f46e5)",

          borderRadius:"20px",

          padding:"30px",

          color:"#ffffff",

          boxShadow:
          "0 15px 35px rgba(37,99,235,.25)"

        }}

      >


        <h1

          style={{

            fontSize:"34px",

            marginBottom:"10px",

            fontWeight:"700"

          }}

        >

          Welcome, {userInfo.name} 👋

        </h1>


        <p

          style={{

            fontSize:"16px",

            opacity:"0.9",

            margin:0

          }}

        >

          Explore opportunities, connect with alumni,
          and grow your career.

        </p>


      </div>





      {/* Statistics Cards */}


      <div

        style={{

          display:"grid",

          gridTemplateColumns:
          "repeat(auto-fit,minmax(220px,1fr))",

          gap:"20px",

          marginTop:"25px"

        }}

      >


        <StatCard

          title="Jobs Available"

          value={stats.totalJobs}

          color="#2563eb"

        />


        <StatCard

          title="Alumni Network"

          value={stats.totalAlumni}

          color="#16a34a"

        />


        <StatCard

          title="Students"

          value={stats.totalStudents}

          color="#ea580c"

        />


        <StatCard

          title="Events"

          value={stats.totalEvents || 0}

          color="#9333ea"

        />


      </div>






      {/* Bottom Sections */}


      <div

        style={{

          display:"grid",

          gridTemplateColumns:
          "minmax(0,2fr) minmax(280px,1fr)",

          gap:"25px",

          marginTop:"25px"

        }}

      >




        {/* Latest Jobs */}


        <div style={cardStyle}>


          <div

            style={{

              display:"flex",

              justifyContent:"space-between",

              alignItems:"center"

            }}

          >


            <h2>

              Latest Jobs 💼

            </h2>



            <button

              style={smallButton}

              onClick={() => navigate("/jobs")}

            >

              View All

            </button>


          </div>



          <div

            style={{

              marginTop:"20px",

              padding:"25px",

              borderRadius:"15px",

              background:"#f8fafc",

              color:"#64748b"

            }}

          >

            Latest job postings will appear here.

          </div>



        </div>






        {/* Quick Actions */}


        <div style={cardStyle}>


          <h2>

            Quick Actions ⚡

          </h2>




          <button

            style={actionButton}

            onClick={() => navigate("/jobs")}

          >

            🔍 Browse Jobs

          </button>





          <button

            style={actionButton}

            onClick={() => navigate("/directory")}

          >

            🤝 Alumni Directory

          </button>





          <button

            style={actionButton}

            onClick={() => navigate("/profile")}

          >

            👤 My Profile

          </button>



        </div>



      </div>



    </div>

  );

}





const cardStyle = {


  background:"#ffffff",


  padding:"25px",


  borderRadius:"18px",


  width:"100%",


  boxShadow:
  "0 8px 25px rgba(15,23,42,.06)",


  border:
  "1px solid #e5e7eb"


};





const actionButton = {


  width:"100%",


  height:"48px",


  padding:"12px",


  marginTop:"15px",


  border:"none",


  borderRadius:"10px",


  background:"#2563eb",


  color:"#ffffff",


  cursor:"pointer",


  fontSize:"15px",


  fontWeight:"600"


};





const smallButton = {


  background:"#dbeafe",


  color:"#2563eb",


  border:"none",


  padding:"8px 15px",


  borderRadius:"8px",


  cursor:"pointer",


  fontWeight:"600"


};



export default StudentDashboard;