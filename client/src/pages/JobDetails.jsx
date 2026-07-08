// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getJobById } from "../services/jobService";
// import { applyJob } from "../services/applicationService";

// function JobDetails() {

//   const { id } = useParams();

//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const userInfo = JSON.parse(
//     localStorage.getItem("userInfo")
//   );

//   useEffect(() => {

//     const fetchJob = async () => {

//       try {

//         const data = await getJobById(id);

//         setJob(data);

//       } catch (error) {

//         console.log(error);

//       }

//     };

//     fetchJob();

//   }, [id]);

//   const handleApply = async () => {

//     try {

//       setLoading(true);

//       await applyJob(job._id);

//       alert("Application Submitted Successfully!");

//     } catch (error) {

//       alert(
//         error.response?.data?.message ||
//         "Application Failed"
//       );

//     } finally {

//       setLoading(false);

//     }

//   };

//   if (!job)

//     return (

//       <h2 style={{ padding: "40px" }}>
//         Loading...
//       </h2>

//     );

//   return (

//     <div
//       style={{
//         background: "#f4f6f9",
//         minHeight: "100vh",
//         padding: "40px"
//       }}
//     >

//       <div
//         style={{
//           maxWidth: "900px",
//           margin: "auto",
//           background: "#fff",
//           borderRadius: "12px",
//           padding: "35px",
//           boxShadow: "0 4px 12px rgba(0,0,0,.1)"
//         }}
//       >

//         <button
//           onClick={() => window.history.back()}
//           style={{
//             padding: "10px 18px",
//             border: "none",
//             borderRadius: "8px",
//             background: "#2563eb",
//             color: "#fff",
//             cursor: "pointer",
//             marginBottom: "20px"
//           }}
//         >
//           ← Back
//         </button>

//         <h1
//           style={{
//             color: "#2563eb"
//           }}
//         >
//           {job.title}
//         </h1>

//         <h3>{job.company}</h3>

//         <hr />

//         <p>
//           <strong>📍 Location:</strong> {job.location}
//         </p>

//         <p>
//           <strong>💰 Salary:</strong> {job.salary}
//         </p>

//         <p>
//           <strong>💼 Experience:</strong> {job.experience}
//         </p>

//         <p>
//           <strong>🕒 Employment Type:</strong> {job.employmentType}
//         </p>

//         <p>
//           <strong>🎓 Education:</strong> {job.education}
//         </p>

//         <p>
//           <strong>🛠 Skills:</strong>{" "}
//           {job.skills?.join(", ")}
//         </p>

//         <hr />

//         <h2>Job Description</h2>

//         <p>{job.description}</p>

//         <hr />

//         <h2>Recruiter Information</h2>

//         <p>
//           <strong>Name:</strong>{" "}
//           {job.postedBy?.name}
//         </p>

//         <p>
//           <strong>Email:</strong>{" "}
//           {job.postedBy?.email}
//         </p>

//         <p>
//           <strong>Posted On:</strong>{" "}
//           {new Date(job.createdAt).toLocaleDateString()}
//         </p>

//         <div
//           style={{
//             display: "flex",
//             gap: "15px",
//             marginTop: "35px",
//             flexWrap: "wrap"
//           }}
//         >

//           {/* Student Only */}

//           {userInfo?.role === "student" && (

//             <button
//               onClick={handleApply}
//               disabled={loading}
//               style={{
//                 padding: "14px 30px",
//                 background: "#16a34a",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontWeight: "bold"
//               }}
//             >
//               {loading
//                 ? "Applying..."
//                 : "Apply Now"}
//             </button>

//           )}

//           {/* Everyone can open original job link */}

//           <a
//             href={job.applyLink}
//             target="_blank"
//             rel="noreferrer"
//             style={{
//               display: "inline-block",
//               padding: "14px 30px",
//               background: "#2563eb",
//               color: "#fff",
//               borderRadius: "8px",
//               textDecoration: "none",
//               fontWeight: "bold"
//             }}
//           >
//             Open Job Link
//           </a>

//         </div>

//       </div>

//     </div>

//   );

// }

// export default JobDetails;





import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobById } from "../services/jobService";
import { applyJob } from "../services/applicationService";


function JobDetails() {


  const { id } = useParams();


  const [job, setJob] = useState(null);

  const [loading, setLoading] = useState(false);



  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );




  useEffect(() => {


    const fetchJob = async () => {


      try {


        const data = await getJobById(id);


        setJob(data);


      } catch(error) {


        console.log(error);


      }


    };


    fetchJob();


  }, [id]);







  const handleApply = async () => {


    try {


      setLoading(true);


      await applyJob(job._id);


      alert("Application Submitted Successfully!");



    } catch(error) {


      alert(
        error.response?.data?.message ||
        "Application Failed"
      );


    } finally {


      setLoading(false);


    }


  };







  if(!job)

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
          Loading Job Details...
        </h2>


      </div>

    );








return (

<div

style={{

minHeight:"100vh",

background:"#f8fafc",

padding:"35px",

fontFamily:"Inter, Segoe UI, sans-serif"

}}

>





<div

style={{

maxWidth:"950px",

margin:"auto"

}}

>





{/* Top Banner */}


<div

style={{

background:
"linear-gradient(135deg,#2563eb,#4f46e5)",

padding:"35px",

borderRadius:"25px",

color:"#fff",

marginBottom:"25px",

boxShadow:
"0 15px 35px rgba(37,99,235,.25)"

}}

>


<button

onClick={() => window.history.back()}

style={{

background:"rgba(255,255,255,.2)",

color:"#fff",

border:"none",

padding:"10px 18px",

borderRadius:"10px",

cursor:"pointer",

marginBottom:"25px"

}}

>

← Back

</button>




<h1

style={{

fontSize:"38px",

margin:"0 0 12px"

}}

>

{job.title}

</h1>



<h2

style={{

fontSize:"20px",

fontWeight:"500",

opacity:.9

}}

>

🏢 {job.company}

</h2>


</div>









{/* Main Card */}


<div

style={cardStyle}

>





<div

style={{

display:"grid",

gridTemplateColumns:
"repeat(auto-fit,minmax(220px,1fr))",

gap:"20px"

}}

>



<InfoCard

icon="📍"

title="Location"

value={job.location}

/>



<InfoCard

icon="💰"

title="Salary"

value={job.salary}

/>



<InfoCard

icon="💼"

title="Experience"

value={job.experience}

/>



<InfoCard

icon="🕒"

title="Employment"

value={job.employmentType}

/>



<InfoCard

icon="🎓"

title="Education"

value={job.education}

/>



</div>







<div style={divider}/>







<h2 style={headingStyle}>
🛠 Required Skills
</h2>


<div

style={{

display:"flex",

gap:"10px",

flexWrap:"wrap"

}}

>


{

job.skills?.map((skill,index)=>(


<span

key={index}

style={skillStyle}

>

{skill}

</span>


))


}


</div>








<div style={divider}/>






<h2 style={headingStyle}>
📝 Job Description
</h2>



<p

style={{

color:"#475569",

lineHeight:"1.8",

fontSize:"16px"

}}

>

{job.description}

</p>







<div style={divider}/>







<h2 style={headingStyle}>
👤 Recruiter Information
</h2>



<div

style={{

background:"#f8fafc",

padding:"20px",

borderRadius:"15px"

}}

>


<p style={textStyle}>

<b>Name:</b>{" "}

{job.postedBy?.name}

</p>



<p style={textStyle}>

<b>Email:</b>{" "}

{job.postedBy?.email}

</p>



<p style={textStyle}>

<b>Posted On:</b>{" "}

{new Date(job.createdAt).toLocaleDateString()}

</p>


</div>









{/* Buttons */}


<div

style={{

display:"flex",

gap:"15px",

marginTop:"35px",

flexWrap:"wrap"

}}

>



{

userInfo?.role==="student" &&

(


<button

onClick={handleApply}

disabled={loading}

style={applyButton}

>

{

loading

?

"Applying..."

:

"🚀 Apply Now"

}


</button>


)

}







<a

href={job.applyLink}

target="_blank"

rel="noreferrer"

style={linkButton}

>

🔗 Open Job Link

</a>




</div>





</div>



</div>



</div>


);

}







function InfoCard({icon,title,value}){


return (

<div

style={{

background:"#f8fafc",

padding:"18px",

borderRadius:"15px",

border:"1px solid #e5e7eb"

}}

>


<div

style={{

fontSize:"25px",

marginBottom:"8px"

}}

>

{icon}

</div>



<strong>

{title}

</strong>



<p

style={{

margin:"8px 0 0",

color:"#64748b"

}}

>

{value || "Not specified"}

</p>



</div>

);


}








const cardStyle={


background:"#fff",

padding:"35px",

borderRadius:"25px",

boxShadow:
"0 10px 35px rgba(15,23,42,.08)",

border:
"1px solid #e5e7eb"

};




const divider={

height:"1px",

background:"#e5e7eb",

margin:"30px 0"

};





const headingStyle={

color:"#111827",

marginBottom:"18px"

};





const textStyle={

color:"#475569",

margin:"10px 0"

};





const skillStyle={

background:"#dbeafe",

color:"#2563eb",

padding:"8px 15px",

borderRadius:"20px",

fontWeight:"600",

fontSize:"14px"

};





const applyButton={

padding:"14px 35px",

background:"#16a34a",

color:"#fff",

border:"none",

borderRadius:"12px",

cursor:"pointer",

fontWeight:"700",

fontSize:"16px"

};





const linkButton={

padding:"14px 35px",

background:
"linear-gradient(135deg,#2563eb,#4f46e5)",

color:"#fff",

borderRadius:"12px",

textDecoration:"none",

fontWeight:"700",

fontSize:"16px"

};





export default JobDetails;