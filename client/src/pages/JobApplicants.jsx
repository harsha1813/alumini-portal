// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getApplicants } from "../services/applicationService";
// import { updateStatus } from "../services/applicationService";

// function JobApplicants() {
//   const { jobId } = useParams();

//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadApplicants();
//   }, []);

//   const changeStatus=async(id,status)=>{

// try{

// await updateStatus(id,status);

// loadApplicants();

// }catch(error){

// console.log(error);

// alert("Failed");

// }

// };

//   const loadApplicants = async () => {
//     try {
//       const data = await getApplicants(jobId);
//       setApplications(data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div style={{ padding: "30px" }}>
//         <h2>Loading...</h2>
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: "30px" }}>
//       <h1
//         style={{
//           color: "#2563eb",
//           marginBottom: "25px",
//         }}
//       >
//         Job Applicants
//       </h1>

//       {applications.length === 0 ? (
//         <h3>No applicants yet.</h3>
//       ) : (
//         applications.map((application) => (
//           <div
//             key={application._id}
//             style={{
//               background: "#fff",
//               padding: "25px",
//               borderRadius: "12px",
//               marginBottom: "20px",
//               boxShadow: "0 4px 10px rgba(0,0,0,.08)",
//             }}
//           >
//             <h2>{application.student?.name}</h2>

//             <p>
//               <strong>Email:</strong> {application.student?.email}
//             </p>

//             <p>
//               <strong>Branch:</strong> {application.student?.branch}
//             </p>

//             <p>
//               <strong>Graduation Year:</strong>{" "}
//               {application.student?.graduationYear}
//             </p>


//             <p>

// <strong>Status :</strong>

// <span
// style={{
// color:
// application.status==="Approved"
// ?"green"
// :application.status==="Rejected"
// ?"red"
// :"#f59e0b",
// fontWeight:"bold"
// }}
// >

// {application.status}

// </span>

// </p>

// <p>
//   <strong>Resume:</strong>{" "}
//   {application.student?.resumeLink ? (
//     <a
//       href={application.student.resumeLink}
//       target="_blank"
//       rel="noopener noreferrer"
//       style={{
//         color: "#2563eb",
//         fontWeight: "bold",
//         textDecoration: "none"
//       }}
//     >
//       📄 View Resume
//     </a>
//   ) : (
//     <span style={{ color: "gray" }}>
//       Resume not uploaded
//     </span>
//   )}
// </p>


// <div
// style={{
// display:"flex",
// gap:"12px",
// marginTop:"20px"
// }}
// >

// <button
// onClick={()=>
// changeStatus(
// application._id,
// "Approved"
// )
// }
// style={{
// background:"#16a34a",
// color:"#fff",
// border:"none",
// padding:"10px 18px",
// borderRadius:"8px",
// cursor:"pointer"
// }}
// >

// Approve

// </button>

// <button
// onClick={()=>
// changeStatus(
// application._id,
// "Rejected"
// )
// }
// style={{
// background:"#dc2626",
// color:"#fff",
// border:"none",
// padding:"10px 18px",
// borderRadius:"8px",
// cursor:"pointer"
// }}
// >

// Reject

// </button>

// </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default JobApplicants;


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApplicants, updateStatus } from "../services/applicationService";


function JobApplicants() {

  const { jobId } = useParams();


  const [applications, setApplications] = useState([]);

  const [loading, setLoading] = useState(true);




  useEffect(() => {

    loadApplicants();

  }, []);





  const changeStatus = async(id,status)=>{


    try{


      await updateStatus(id,status);


      loadApplicants();


    }catch(error){


      console.log(error);


      alert("Failed");


    }


  };







  const loadApplicants = async()=>{


    try{


      const data = await getApplicants(jobId);


      setApplications(data);



    }catch(error){


      console.log(error);


    }

    finally{


      setLoading(false);


    }


  };






  if(loading){


    return (

      <div

        style={{

          minHeight:"70vh",

          display:"flex",

          justifyContent:"center",

          alignItems:"center",

          background:"#f8fafc"

        }}

      >

        <h2 style={{color:"#2563eb"}}>
          Loading Applicants...
        </h2>


      </div>

    );

  }







return (

<div

style={{

padding:"35px",

background:"#f8fafc",

minHeight:"100vh",

fontFamily:"Inter, Segoe UI, sans-serif"

}}

>





{/* Header */}


<div

style={{

background:
"linear-gradient(135deg,#2563eb,#4f46e5)",

padding:"35px",

borderRadius:"22px",

color:"#fff",

marginBottom:"35px",

boxShadow:
"0 15px 35px rgba(37,99,235,.25)"

}}

>


<h1

style={{

fontSize:"36px",

margin:"0 0 10px"

}}

>

👥 Job Applicants

</h1>



<p

style={{

opacity:.9,

fontSize:"16px"

}}

>

Review candidates and manage application status.

</p>


</div>








{

applications.length===0 ?


(

<div

style={emptyStyle}

>

<h3>
No applicants yet.
</h3>

<p>
Applications will appear here once students apply.
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





{/* Profile Icon */}


<div

style={{

width:"65px",

height:"65px",

borderRadius:"50%",

background:
"linear-gradient(135deg,#2563eb,#7c3aed)",

color:"#fff",

display:"flex",

alignItems:"center",

justifyContent:"center",

fontSize:"28px",

fontWeight:"700",

marginBottom:"15px"

}}

>

{

application.student?.name
?.charAt(0)
?.toUpperCase()

}

</div>







<h2

style={{

margin:"0 0 15px",

color:"#111827"

}}

>

{application.student?.name}

</h2>





<p style={infoStyle}>

📧 <b>Email:</b> {application.student?.email}

</p>




<p style={infoStyle}>

🎓 <b>Branch:</b> {application.student?.branch}

</p>




<p style={infoStyle}>

📅 <b>Graduation:</b>{" "}

{application.student?.graduationYear}

</p>






{/* Status */}


<div

style={{

marginTop:"15px",

marginBottom:"15px"

}}

>

<strong>
Status:
</strong>


<span

style={{

marginLeft:"8px",

padding:"6px 14px",

borderRadius:"20px",

fontSize:"13px",

fontWeight:"700",

background:

application.status==="Approved"

?

"#dcfce7"

:

application.status==="Rejected"

?

"#fee2e2"

:

"#fef3c7",


color:

application.status==="Approved"

?

"#15803d"

:

application.status==="Rejected"

?

"#dc2626"

:

"#d97706"

}}

>

{application.status}

</span>


</div>







{/* Resume */}


<div

style={{

marginBottom:"20px"

}}

>


<strong>
Resume:
</strong>


<br/>


{

application.student?.resumeLink ?


(

<a

href={application.student.resumeLink}

target="_blank"

rel="noopener noreferrer"

style={{

display:"inline-block",

marginTop:"8px",

color:"#2563eb",

fontWeight:"700",

textDecoration:"none"

}}

>

📄 View Resume

</a>


)


:

(

<span

style={{

color:"#94a3b8"

}}

>

Resume not uploaded

</span>

)


}



</div>








{/* Buttons */}



<div

style={{

display:"flex",

gap:"12px"

}}

>


<button

onClick={()=>changeStatus(
application._id,
"Approved"
)}

style={approveButton}

>

✓ Approve

</button>





<button

onClick={()=>changeStatus(
application._id,
"Rejected"
)}

style={rejectButton}

>

✕ Reject

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








const cardStyle={

background:"#fff",

padding:"28px",

borderRadius:"22px",

boxShadow:
"0 10px 30px rgba(15,23,42,.08)",

border:
"1px solid #e5e7eb"

};





const infoStyle={

color:"#64748b",

fontSize:"15px",

margin:"12px 0"

};





const approveButton={

flex:1,

padding:"12px",

background:"#16a34a",

color:"#fff",

border:"none",

borderRadius:"12px",

cursor:"pointer",

fontWeight:"700"

};





const rejectButton={

flex:1,

padding:"12px",

background:"#dc2626",

color:"#fff",

border:"none",

borderRadius:"12px",

cursor:"pointer",

fontWeight:"700"

};





const emptyStyle={

background:"#fff",

padding:"45px",

borderRadius:"20px",

textAlign:"center",

color:"#64748b",

boxShadow:
"0 10px 25px rgba(0,0,0,.06)"

};




export default JobApplicants;
