// import { useEffect, useState } from "react";
// import StatCard from "../components/StatCard";
// import { getDashboardStats } from "../services/dashboardService";

// function AlumniDashboard() {
//   const [stats, setStats] = useState(null);

//   const userInfo = JSON.parse(localStorage.getItem("userInfo"));

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
//     return (
     
//         <h2>Loading...</h2>
     
//     );
//   }

//   return (
//     <>
//       <h1>Welcome, {userInfo.name} 👋</h1>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
//           gap: "20px",
//           marginTop: "30px",
//         }}
//       >
//         <StatCard
//           title="Jobs Posted"
//           value={stats.totalJobs}
//           color="#2563eb"
//         />

//         <StatCard
//           title="Students"
//           value={stats.totalStudents}
//           color="#16a34a"
//         />

//         <StatCard
//           title="Alumni"
//           value={stats.totalAlumni}
//           color="#ea580c"
//         />

//         <StatCard
//           title="Events"
//           value={stats.totalEvents || 0}
//           color="#9333ea"
//         />
//       </div>
//     </>
//   );
// }

// export default AlumniDashboard;



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StatCard from "../components/StatCard";
import { getDashboardStats } from "../services/dashboardService";


function AlumniDashboard() {

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

    } catch(error) {

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
          background:"#f8fafc"
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
          "linear-gradient(135deg,#059669,#2563eb)",

          padding:"35px",

          borderRadius:"20px",

          color:"#fff",

          boxShadow:
          "0 15px 35px rgba(37,99,235,.2)"

        }}

      >


        <h1
          style={{
            fontSize:"34px",
            marginBottom:"10px"
          }}
        >

          Welcome back, {userInfo.name} 👋

        </h1>



        <p
          style={{
            fontSize:"17px",
            opacity:"0.9"
          }}
        >

          Manage opportunities, connect with students,
          and guide the next generation.

        </p>


      </div>





      {/* Statistics */}


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
          title="Jobs Posted"
          value={stats.totalJobs}
          color="#2563eb"
        />


        <StatCard
          title="Students"
          value={stats.totalStudents}
          color="#16a34a"
        />


        <StatCard
          title="Alumni Network"
          value={stats.totalAlumni}
          color="#ea580c"
        />


        <StatCard
          title="Events"
          value={stats.totalEvents || 0}
          color="#9333ea"
        />


      </div>






      {/* Bottom Section */}



      <div

        style={{

          display:"grid",

          gridTemplateColumns:
          "2fr 1fr",

          gap:"25px",

          marginTop:"30px"

        }}

      >



        {/* Recent Activity */}


        <div style={cardStyle}>


          <h2>
            Recent Activity 📌
          </h2>


          <div

            style={emptyBox}

          >

            Your recent activities will appear here.

          </div>


        </div>






        {/* Quick Actions */}


        <div style={cardStyle}>


          <h2>
            Quick Actions ⚡
          </h2>



          <button

            style={buttonStyle}

            onClick={() => navigate("/jobs")}

          >

            ➕ Post Job

          </button>




          <button

            style={buttonStyle}

            onClick={() => navigate("/directory")}

          >

            🤝 View Students

          </button>




          <button

            style={buttonStyle}

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

  border:"1px solid #e5e7eb",

  boxShadow:
  "0 8px 25px rgba(15,23,42,.06)"

};



const emptyBox = {

  marginTop:"20px",

  padding:"25px",

  background:"#f8fafc",

  borderRadius:"15px",

  color:"#64748b"

};



const buttonStyle = {

  width:"100%",

  height:"48px",

  marginTop:"15px",

  border:"none",

  borderRadius:"10px",

  background:"#2563eb",

  color:"#fff",

  cursor:"pointer",

  fontWeight:"600",

  fontSize:"15px"

};



export default AlumniDashboard;