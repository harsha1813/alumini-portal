// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   getStudentApplications,
//   deleteApplication
// } from "../services/applicationService";
// function MyApplications() {

//   const [applications, setApplications] = useState([]);

//   useEffect(() => {
//     loadApplications();
//   }, []);

//   const loadApplications = async () => {

//     try {

//       const data = await getStudentApplications();

//       setApplications(data);

//     } catch (error) {

//       console.log(error);

//     }

//   };


//   const handleDelete = async (id) => {

//   const confirmDelete = window.confirm(
//     "Are you sure you want to withdraw this application?"
//   );

//   if (!confirmDelete) return;

//   try {

//     await deleteApplication(id);

//     loadApplications();

//     alert("Application deleted successfully.");

//   } catch (error) {

//     alert("Delete failed.");

//   }

// };


//   return (

//     <div style={{ padding: "30px" }}>

//       <h1
//         style={{
//           color: "#2563eb",
//           marginBottom: "25px"
//         }}
//       >
//         My Applications
//       </h1>

//       {

//         applications.length === 0 ?

//         (

//           <h3>No applications yet.</h3>

//         )

//         :

//         applications.map((application) => (

//           <div
//             key={application._id}
//             style={{
//               background: "#fff",
//               padding: "25px",
//               borderRadius: "12px",
//               marginBottom: "20px",
//               boxShadow: "0 4px 10px rgba(0,0,0,.08)"
//             }}
//           >

//             <h2>{application.job?.title}</h2>

//             <p>

//               <strong>Company:</strong>{" "}

//               {application.job?.company}

//             </p>

//             <p>

//               <strong>Location:</strong>{" "}

//               {application.job?.location}

//             </p>

//             <p>

//               <strong>Applied On:</strong>{" "}

//               {new Date(
//                 application.createdAt
//               ).toLocaleDateString()}

//             </p>

//             <p>

//               <strong>Status:</strong>{" "}

//               <span
//                 style={{
//                   color:
//                     application.status === "Approved"
//                       ? "green"
//                       : application.status === "Rejected"
//                       ? "red"
//                       : "#f59e0b",
//                   fontWeight: "bold"
//                 }}
//               >
//                 {application.status}
//               </span>

//             </p>

//             <Link
//               to={`/jobs/${application.job?._id}`}
//               style={{
//                 display: "inline-block",
//                 marginTop: "15px",
//                 background: "#2563eb",
//                 color: "#fff",
//                 padding: "10px 18px",
//                 borderRadius: "8px",
//                 textDecoration: "none"
//               }}
//             >
//               View Job
//             </Link>

//             <button
//   onClick={() => handleDelete(application._id)}
//   style={{
//     marginLeft: "10px",
//     background: "#dc2626",
//     color: "#fff",
//     padding: "10px 18px",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer"
//   }}
// >
//   Delete Application
// </button>

// {/* {application.status === "Pending" && (
//   <button
//     onClick={() => handleDelete(application._id)}
//     style={{
//       marginLeft: "10px",
//       background: "#dc2626",
//       color: "#fff",
//       padding: "10px 18px",
//       border: "none",
//       borderRadius: "8px",
//       cursor: "pointer"
//     }}
//   >
//     Withdraw Application
//   </button>
// )} */}

//           </div>

//         ))

//       }

//     </div>

//   );

// }

// export default MyApplications;





import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getStudentApplications,
  deleteApplication
} from "../services/applicationService";


function MyApplications() {


  const [applications, setApplications] = useState([]);



  useEffect(() => {

    loadApplications();

  }, []);




  const loadApplications = async () => {

    try {

      const data = await getStudentApplications();

      setApplications(data);

    } catch (error) {

      console.log(error);

    }

  };





  const handleDelete = async (id) => {


    const confirmDelete = window.confirm(
      "Are you sure you want to withdraw this application?"
    );


    if (!confirmDelete) return;



    try {


      await deleteApplication(id);


      loadApplications();


      alert("Application deleted successfully.");


    } catch (error) {


      alert("Delete failed.");


    }


  };






  return (

    <div

      style={{

        minHeight:"100vh",

        background:"#f8fafc",

        padding:"35px",

        fontFamily:"Inter, Segoe UI, sans-serif"

      }}

    >




      {/* Header */}


      <div

        style={{

          background:
          "linear-gradient(135deg,#2563eb,#4f46e5)",

          color:"#fff",

          padding:"35px",

          borderRadius:"22px",

          marginBottom:"35px",

          boxShadow:
          "0 15px 35px rgba(37,99,235,.25)"

        }}

      >

        <h1

          style={{

            margin:"0 0 10px",

            fontSize:"36px"

          }}

        >

          📄 My Applications

        </h1>


        <p

          style={{

            margin:0,

            opacity:.9,

            fontSize:"16px"

          }}

        >

          Track your job applications and status updates.

        </p>


      </div>







      {

        applications.length === 0 ?


        (

          <div style={emptyStyle}>

            <h3>
              No applications yet.
            </h3>

            <p>
              Start applying for jobs to see them here.
            </p>

          </div>

        )


        :


        (

          <div

            style={{

              display:"grid",

              gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",

              gap:"25px"

            }}

          >



          {

            applications.map((application)=>(


              <div

                key={application._id}

                style={cardStyle}

              >




                <div

                  style={{

                    width:"60px",

                    height:"60px",

                    borderRadius:"16px",

                    background:
                    "linear-gradient(135deg,#2563eb,#7c3aed)",

                    display:"flex",

                    justifyContent:"center",

                    alignItems:"center",

                    color:"#fff",

                    fontSize:"25px",

                    marginBottom:"18px"

                  }}

                >

                  💼

                </div>






                <h2

                  style={{

                    color:"#111827",

                    marginBottom:"18px"

                  }}

                >

                  {application.job?.title}

                </h2>





                <p style={infoStyle}>

                  🏢 <b>Company:</b>{" "}

                  {application.job?.company}

                </p>




                <p style={infoStyle}>

                  📍 <b>Location:</b>{" "}

                  {application.job?.location}

                </p>




                <p style={infoStyle}>

                  📅 <b>Applied On:</b>{" "}

                  {new Date(
                    application.createdAt
                  ).toLocaleDateString()}

                </p>







                <div

                  style={{

                    margin:"18px 0"

                  }}

                >

                  <strong>
                    Status:
                  </strong>


                  <span

                    style={{

                      marginLeft:"10px",

                      padding:"6px 15px",

                      borderRadius:"20px",

                      fontSize:"13px",

                      fontWeight:"700",


                      background:

                      application.status === "Approved"

                      ?

                      "#dcfce7"

                      :

                      application.status === "Rejected"

                      ?

                      "#fee2e2"

                      :

                      "#fef3c7",



                      color:

                      application.status === "Approved"

                      ?

                      "#15803d"

                      :

                      application.status === "Rejected"

                      ?

                      "#dc2626"

                      :

                      "#d97706"

                    }}

                  >

                    {application.status}

                  </span>


                </div>






                <div

                  style={{

                    display:"flex",

                    gap:"12px",

                    marginTop:"25px"

                  }}

                >




                <Link

                  to={`/jobs/${application.job?._id}`}

                  style={viewButton}

                >

                  View Job

                </Link>





                <button

                  onClick={() => 
                    handleDelete(application._id)
                  }

                  style={deleteButton}

                >

                  Delete

                </button>



                </div>





              </div>


            ))


          }



          </div>

        )


      }



    </div>

  );

}






const cardStyle = {


  background:"#ffffff",

  padding:"28px",

  borderRadius:"22px",

  boxShadow:
  "0 10px 30px rgba(15,23,42,.08)",

  border:
  "1px solid #e5e7eb"

};





const infoStyle = {


  color:"#64748b",

  margin:"12px 0",

  fontSize:"15px"


};






const viewButton = {


  flex:1,

  textAlign:"center",

  background:
  "linear-gradient(135deg,#2563eb,#4f46e5)",

  color:"#fff",

  padding:"12px",

  borderRadius:"12px",

  textDecoration:"none",

  fontWeight:"700"

};






const deleteButton = {


  flex:1,

  background:"#dc2626",

  color:"#fff",

  border:"none",

  padding:"12px",

  borderRadius:"12px",

  cursor:"pointer",

  fontWeight:"700"

};






const emptyStyle = {


  background:"#fff",

  padding:"45px",

  textAlign:"center",

  borderRadius:"20px",

  color:"#64748b",

  boxShadow:
  "0 10px 25px rgba(0,0,0,.06)"


};





export default MyApplications;