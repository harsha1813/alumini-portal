
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   getJobs,
//   createJob,
//   updateJob,
//   deleteJob,
//   getJobFilters
// } from "../services/jobService";

// function Jobs() {
//   const [jobs, setJobs] = useState([]);
//   const [search, setSearch] = useState("");
//   const [companyFilter, setCompanyFilter] = useState("");
//   const [locationFilter, setLocationFilter] = useState("");
//   const [sort, setSort] = useState("newest");
//   const [editingJobId, setEditingJobId] = useState(null);
//   const [companies, setCompanies] =useState([]);
//   const [locations, setLocations] =useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] =useState(1);

//   const userInfo = JSON.parse(localStorage.getItem("userInfo"));
// const isStudent =
//   userInfo.role === "student";

// const isAlumni =
//   userInfo.role === "alumni";

// const isAdmin =
//   userInfo.role === "admin";
// const [formData, setFormData] = useState({
//   title: "",
//   company: "",
//   location: "",
//   description: "",
//   applyLink: "",
//   salary: "",
//   employmentType: "",
//   experience: "",
//   education: "",
//   skills: ""
// });
// useEffect(() => {
//   fetchJobs();
//   fetchFilters();

// }, [
// search,
// companyFilter,
// locationFilter,
// sort,
// page
// ]);

// useEffect(() => {

//   setPage(1);

// }, [
// search,
// companyFilter,
// locationFilter,
// sort
// ]);

// const fetchFilters = async () => {

//   try {

//     const data =
//       await getJobFilters();

//     setCompanies(
//       data.companies
//     );

//     setLocations(
//       data.locations
//     );

//   } catch (error) {

//     console.log(error);

//   }

// };


//  const fetchJobs = async () => {

//   try {

// const data = await getJobs(
// search,
// companyFilter,
// locationFilter,
// sort,
// page
// );

// setJobs(data.jobs);

// setTotalPages(
// data.totalPages
// );

//   } catch (error) {

//     console.log(error);

//   }

// };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//         const payload = {
//   ...formData,

//   skills: formData.skills
//     .split(",")
//     .map((skill) => skill.trim())
//     .filter((skill) => skill !== "")
// };
        
//       if (editingJobId) {
// await updateJob(editingJobId,payload);
// alert("Job Updated Successfully");
//         setEditingJobId(null);
//       } else {
//        await createJob(payload);
//         alert("Job Posted Successfully");
//       }

//      setFormData({
//   title: "",
//   company: "",
//   location: "",
//   description: "",
//   applyLink: "",
//   salary: "",
//   employmentType: "",
//   experience: "",
//   education: "",
//   skills: ""
// });
//       fetchJobs();
//     } catch (err) {
//       console.log(err);
//       alert("Operation Failed");
//     }
//   };

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this job?"
//     );

//     if (!confirmDelete) return;

//     try {
//       await deleteJob(id);

//       alert("Job Deleted Successfully");

//       fetchJobs();
//     } catch (err) {
//       console.log(err);
//       alert("Delete Failed");
//     }
//   };

//  return (

// <div
// style={{
// padding:"30px",
// background:"#f4f6f9",
// minHeight:"100vh"
// }}
// >
//       <h1
//         style={{
//           color: "#2563eb",
//           marginBottom: "25px"
//         }}
//       >
//         Job Portal
//       </h1>
//       <input
//   type="text"
//   placeholder="🔍 Search by title, company or location..."
//   value={search}
//   onChange={(e) =>
//     setSearch(e.target.value)
//   }
//   style={{
//     width: "100%",
//     padding: "12px",
//     marginBottom: "25px",
//     borderRadius: "8px",
//     border: "1px solid #ccc",
//     fontSize: "16px"
//   }}
// />

// <div
//   style={{
//     display: "flex",
//     gap: "15px",
//     marginBottom: "25px",
//     flexWrap: "wrap"
//   }}
// >

// <select
// value={companyFilter}
// onChange={(e)=>
// setCompanyFilter(
// e.target.value
// )}
// style={inputStyle}
// >

// <option value="">
// All Companies
// </option>

// {
// companies.map(company=>(

// <option
// key={company}
// value={company}
// >

// {company}

// </option>

// ))
// }

// </select>

// <select
// value={locationFilter}
// onChange={(e)=>
// setLocationFilter(
// e.target.value
// )}
// style={inputStyle}
// >

// <option value="">
// All Locations
// </option>

// {
// locations.map(location=>(

// <option
// key={location}
// value={location}
// >

// {location}

// </option>

// ))
// }

// </select>

//   <select
//     value={sort}
//     onChange={(e) =>
//       setSort(e.target.value)
//     }
//     style={inputStyle}
//   >
//     <option value="newest">
//       Newest First
//     </option>

//     <option value="oldest">
//       Oldest First
//     </option>
//   </select>

// </div>
// <h1>

// <h1
//   style={{
//     color: "#2563eb",
//     marginBottom: "20px"
//   }}
// >
//   {isStudent && "Browse Jobs"}

//   {isAlumni && "Job Management"}

//   {isAdmin && "Manage Jobs"}
// </h1>

// </h1>
// {(isAlumni || isAdmin) && (

//       <form
//         onSubmit={handleSubmit}
//         style={{
//           background: "#fff",
//           padding: "25px",
//           borderRadius: "12px",
//           boxShadow: "0 4px 12px rgba(0,0,0,.1)",
//           marginBottom: "40px"
//         }}
//       >
//         <input
//           type="text"
//           name="title"
//           placeholder="Job Title"
//           value={formData.title}
//           onChange={handleChange}
//           style={inputStyle}
//         />

//         <input
//           type="text"
//           name="company"
//           placeholder="Company"
//           value={formData.company}
//           onChange={handleChange}
//           style={inputStyle}
//         />

//         <input
//           type="text"
//           name="location"
//           placeholder="Location"
//           value={formData.location}
//           onChange={handleChange}
//           style={inputStyle}
//         />

//         <textarea
//           name="description"
//           placeholder="Job Description"
//           value={formData.description}
//           onChange={handleChange}
//           style={textareaStyle}
//         />

//         <input
//           type="text"
//           name="applyLink"
//           placeholder="Apply Link"
//           value={formData.applyLink}
//           onChange={handleChange}
//           style={inputStyle}
//         />
//         <input
//   type="text"
//   name="salary"
//   placeholder="Salary (e.g. ₹8 LPA)"
//   value={formData.salary}
//   onChange={handleChange}
//   style={inputStyle}
// />
// <select
//   name="employmentType"
//   value={formData.employmentType}
//   onChange={handleChange}
//   style={inputStyle}
// >
//   <option value="">Employment Type</option>
//   <option value="Full Time">Full Time</option>
//   <option value="Part Time">Part Time</option>
//   <option value="Internship">Internship</option>
//   <option value="Contract">Contract</option>
// </select>

// <input
//   type="text"
//   name="experience"
//   placeholder="Experience (e.g. 2 Years)"
//   value={formData.experience}
//   onChange={handleChange}
//   style={inputStyle}
// />

// <input
//   type="text"
//   name="education"
//   placeholder="Education (e.g. B.Tech)"
//   value={formData.education}
//   onChange={handleChange}
//   style={inputStyle}
// />

// <input
//   type="text"
//   name="skills"
//   placeholder="Skills (React, Node.js, MongoDB)"
//   value={formData.skills}
//   onChange={handleChange}
//   style={inputStyle}
// />



//         <button
//           type="submit"
//           style={buttonStyle}
//         >
//           {editingJobId ? "Update Job" : "Post Job"}
//         </button>
//       </form>
//   )}

//      <h2 style={{ marginBottom: "20px" }}>
//   {isStudent
//     ? "Available Jobs"
//     : isAlumni
//     ? "All Jobs"
//     : "System Jobs"}
// </h2>

//       {jobs.length === 0 ? (
//         <p>No jobs available.</p>
//       ) : (
//         jobs.map((job) => (
//           <div
//             key={job._id}
//             style={cardStyle}
//           >
//             <h2
//               style={{
//                 color: "#2563eb",
//                 marginBottom: "10px"
//               }}
//             >
//               {job.title}
//             </h2>

//             <p>
//               <strong>🏢 Company:</strong> {job.company}
//             </p>

//             <p>
//               <strong>📍 Location:</strong> {job.location}
//             </p>

//             <p>
//               <strong>👤 Posted By:</strong>{" "}
//               {job.postedBy?.name}
//             </p>

//             <p>
//               <strong>📅 Posted On:</strong>{" "}
//               {new Date(job.createdAt).toLocaleDateString()}
//             </p>

//             <hr style={{ margin: "18px 0" }} />

//             <p>{job.description}</p>

//             <div
//               style={{
//                 display: "flex",
//                 gap: "10px",
//                 marginTop: "20px"
//               }}
//             >
//               <Link
//   to={`/jobs/${job._id}`}
//   style={applyButton}
// >
//   View Details
// </Link>

// {
//   isAlumni &&
//   String(job.postedBy?._id) === String(userInfo._id) && (

//     <Link
//       to={`/applications/${job._id}`}
//       style={applyButton}
//     >
//       View Applicants
//     </Link>

//   )
// }


// {(isAdmin ||
// String(job.postedBy?._id) === String(userInfo._id)) && (
// <>
//     <button
//       type="button"
//       style={editButton}
//       onClick={() => {
//         setEditingJobId(job._id);

//         setFormData({
//           title: job.title,
//           company: job.company,
//           location: job.location,
//           description: job.description,
//           applyLink: job.applyLink,
//           salary: job.salary || "",
//           employmentType: job.employmentType || "",
//           experience: job.experience || "",
//           education: job.education || "",
//           skills: job.skills
//             ? job.skills.join(", ")
//             : ""
//         });

//         window.scrollTo({
//           top: 0,
//           behavior: "smooth"
//         });
//       }}
//     >
//       Edit
//     </button>

//     <button
//       type="button"
//       style={deleteButtonStyle}
//       onClick={() => handleDelete(job._id)}
//     >
//       Delete
//     </button>
// </>
// )}
//             </div>
//           </div>

          
//         )
//     )
//       )}
// {/* Pagination */}

// {totalPages > 1 && (

//   <div
//     style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       gap: "8px",
//       marginTop: "35px",
//       flexWrap: "wrap"
//     }}
//   >

//     <button
//       type="button"
//       disabled={page === 1}
//       onClick={() => setPage(page - 1)}
//       style={{
//         ...paginationButton,
//         opacity: page === 1 ? 0.5 : 1
//       }}
//     >
//       ◀ Previous
//     </button>

//     {[...Array(totalPages)].map((_, index) => (

//       <button
//         key={index}
//         type="button"
//         onClick={() => setPage(index + 1)}
//         style={{
//           ...paginationButton,
//           background:
//             page === index + 1
//               ? "#2563eb"
//               : "#ffffff",
//           color:
//             page === index + 1
//               ? "#fff"
//               : "#000"
//         }}
//       >
//         {index + 1}
//       </button>

//     ))}

//     <button
//       type="button"
//       disabled={page === totalPages}
//       onClick={() => setPage(page + 1)}
//       style={{
//         ...paginationButton,
//         opacity:
//           page === totalPages ? 0.5 : 1
//       }}
//     >
//       Next ▶
//     </button>

//   </div>

// )}
// </div>



// );

// }

// // export default Jobs;

// const inputStyle = {
//   width: "100%",
//   padding: "12px",
//   marginBottom: "15px",
//   borderRadius: "8px",
//   border: "1px solid #ccc",
//   fontSize: "15px",
//   boxSizing: "border-box"
// };

// const textareaStyle = {
//   ...inputStyle,
//   height: "110px",
//   resize: "none"
// };

// const buttonStyle = {
//   width: "100%",
//   padding: "12px",
//   background: "#2563eb",
//   color: "#fff",
//   border: "none",
//   borderRadius: "8px",
//   cursor: "pointer",
//   fontWeight: "bold",
//   fontSize: "16px"
// };

// const cardStyle = {
//   background: "#fff",
//   padding: "25px",
//   borderRadius: "12px",
//   boxShadow: "0 4px 12px rgba(0,0,0,.1)",
//   marginBottom: "25px"
// };

// const applyButton = {
//   padding: "10px 20px",
//   background: "#2563eb",
//   color: "#fff",
//   textDecoration: "none",
//   borderRadius: "6px",
//   fontWeight: "bold"
// };

// const editButton = {
//   padding: "10px 20px",
//   background: "#f59e0b",
//   color: "#fff",
//   border: "none",
//   borderRadius: "6px",
//   cursor: "pointer",
//   fontWeight: "bold"
// };

// const deleteButtonStyle = {
//   padding: "10px 20px",
//   background: "#dc2626",
//   color: "#fff",
//   border: "none",
//   borderRadius: "6px",
//   cursor: "pointer",
//   fontWeight: "bold"
// };

// const paginationButton = {
//   padding: "10px 16px",
//   border: "none",
//   borderRadius: "8px",
//   cursor: "pointer",
//   fontWeight: "bold",
//   background: "#fff",
//   boxShadow: "0 2px 8px rgba(0,0,0,0.12)"
// };

// export default Jobs;











import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
  getJobFilters
} from "../services/jobService";


function Jobs() {


const [jobs, setJobs] = useState([]);

const [search, setSearch] = useState("");

const [companyFilter, setCompanyFilter] = useState("");

const [locationFilter, setLocationFilter] = useState("");

const [sort, setSort] = useState("newest");

const [editingJobId, setEditingJobId] = useState(null);

const [companies, setCompanies] = useState([]);

const [locations, setLocations] = useState([]);

const [page, setPage] = useState(1);

const [totalPages, setTotalPages] = useState(1);



const userInfo = JSON.parse(
localStorage.getItem("userInfo")
);



const isStudent =
userInfo.role === "student";


const isAlumni =
userInfo.role === "alumni";


const isAdmin =
userInfo.role === "admin";





const [formData,setFormData] = useState({

title:"",

company:"",

location:"",

description:"",

applyLink:"",

salary:"",

employmentType:"",

experience:"",

education:"",

skills:""

});







useEffect(()=>{

fetchJobs();

fetchFilters();

},[
search,
companyFilter,
locationFilter,
sort,
page
]);





useEffect(()=>{

setPage(1);

},[
search,
companyFilter,
locationFilter,
sort
]);








const fetchFilters = async()=>{

try{


const data =
await getJobFilters();



setCompanies(
data.companies
);



setLocations(
data.locations
);



}
catch(error){

console.log(error);

}


};








const fetchJobs = async()=>{


try{


const data = await getJobs(

search,

companyFilter,

locationFilter,

sort,

page

);



setJobs(data.jobs);



setTotalPages(
data.totalPages
);



}

catch(error){

console.log(error);

}


};









const handleChange=(e)=>{


setFormData({

...formData,

[e.target.name]:e.target.value

});


};









const handleSubmit = async(e)=>{


e.preventDefault();



try{


const payload={

...formData,


skills:
formData.skills
.split(",")
.map(skill=>skill.trim())
.filter(skill=>skill!=="")

};





if(editingJobId){


await updateJob(
editingJobId,
payload
);


alert(
"Job Updated Successfully"
);


setEditingJobId(null);



}

else{


await createJob(payload);


alert(
"Job Posted Successfully"
);


}






setFormData({

title:"",

company:"",

location:"",

description:"",

applyLink:"",

salary:"",

employmentType:"",

experience:"",

education:"",

skills:""

});
fetchJobs();
}
catch(err){
console.log(err);

alert(
"Operation Failed"
);

}

};
const handleDelete = async(id)=>{


const confirmDelete =
window.confirm(
"Are you sure you want to delete this job?"
);



if(!confirmDelete)
return;




try{


await deleteJob(id);



alert(
"Job Deleted Successfully"
);



fetchJobs();



}

catch(err){


console.log(err);


alert(
"Delete Failed"
);


}



};

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

marginBottom:"30px",

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

💼 Job Portal

</h1>


<p

style={{

opacity:.9,

fontSize:"16px"

}}

>

Discover opportunities, manage jobs and grow careers.

</p>


</div>







{/* Search */}


<input

type="text"

placeholder="🔍 Search by title, company or location..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

style={searchStyle}

/>







{/* Filters */}



<div

style={{

display:"grid",

gridTemplateColumns:
"repeat(auto-fit,minmax(220px,1fr))",

gap:"15px",

marginBottom:"30px"

}}

>


<select

value={companyFilter}

onChange={(e)=>
setCompanyFilter(e.target.value)
}

style={inputStyle}

>

<option value="">
All Companies
</option>


{

companies.map(company=>(

<option

key={company}

value={company}

>

{company}

</option>

))

}

</select>





<select

value={locationFilter}

onChange={(e)=>
setLocationFilter(e.target.value)
}

style={inputStyle}

>

<option value="">
All Locations
</option>


{

locations.map(location=>(

<option

key={location}

value={location}

>

{location}

</option>

))

}

</select>





<select

value={sort}

onChange={(e)=>
setSort(e.target.value)
}

style={inputStyle}

>


<option value="newest">
Newest First
</option>


<option value="oldest">
Oldest First
</option>


</select>


</div>






<h1

style={{

color:"#2563eb",

marginBottom:"20px"

}}

>


{isStudent && "Browse Jobs"}

{isAlumni && "Job Management"}

{isAdmin && "Manage Jobs"}


</h1>







{/* POST JOB FORM */}



{

(isAlumni || isAdmin) && (


<form

onSubmit={handleSubmit}

style={formCard}

>



<h2>
Create Job Posting 🚀
</h2>



<input

name="title"

placeholder="Job Title"

value={formData.title}

onChange={handleChange}

style={inputStyle}

/>




<input

name="company"

placeholder="Company"

value={formData.company}

onChange={handleChange}

style={inputStyle}

/>





<input

name="location"

placeholder="Location"

value={formData.location}

onChange={handleChange}

style={inputStyle}

/>




<textarea

name="description"

placeholder="Job Description"

value={formData.description}

onChange={handleChange}

style={textareaStyle}

/>




<input

name="applyLink"

placeholder="Apply Link"

value={formData.applyLink}

onChange={handleChange}

style={inputStyle}

/>





<input

name="salary"

placeholder="Salary"

value={formData.salary}

onChange={handleChange}

style={inputStyle}

/>





<select

name="employmentType"

value={formData.employmentType}

onChange={handleChange}

style={inputStyle}

>


<option value="">
Employment Type
</option>


<option value="Full Time">
Full Time
</option>


<option value="Part Time">
Part Time
</option>


<option value="Internship">
Internship
</option>


<option value="Contract">
Contract
</option>


</select>





<input

name="experience"

placeholder="Experience"

value={formData.experience}

onChange={handleChange}

style={inputStyle}

/>





<input

name="education"

placeholder="Education"

value={formData.education}

onChange={handleChange}

style={inputStyle}

/>





<input

name="skills"

placeholder="Skills (React, Node)"

value={formData.skills}

onChange={handleChange}

style={inputStyle}

/>




<button

style={buttonStyle}

>

{

editingJobId

?

"Update Job"

:

"Post Job"

}

</button>



</form>


)

}








<h2>

{

isStudent

?

"Available Jobs"

:

isAlumni

?

"All Jobs"

:

"System Jobs"

}

</h2>








{/* JOB CARDS */}



{

jobs.length===0

?

<p>
No jobs available.
</p>


:


jobs.map((job)=>(



<div

key={job._id}

style={cardStyle}

>



<h2

style={{

color:"#2563eb"

}}

>

{job.title}

</h2>




<p>
🏢 <b>Company:</b> {job.company}
</p>


<p>
📍 <b>Location:</b> {job.location}
</p>


<p>
👤 <b>Posted By:</b> {job.postedBy?.name}
</p>


<p>
📅 <b>Posted On:</b>{" "}
{new Date(job.createdAt).toLocaleDateString()}
</p>



<hr/>

<p>
{job.description}
</p>





<div

style={{

display:"flex",

gap:"10px",

flexWrap:"wrap"

}}

>


<Link

to={`/jobs/${job._id}`}

style={applyButton}

>

View Details

</Link>






{

isAlumni &&

String(job.postedBy?._id)===String(userInfo._id)

&&

(

<Link

to={`/applications/${job._id}`}

style={applyButton}

>

View Applicants

</Link>

)

}







{

(isAdmin ||

String(job.postedBy?._id)===String(userInfo._id))

&&

<>


<button

style={editButton}

onClick={()=>{


setEditingJobId(job._id);


setFormData({

title:job.title,

company:job.company,

location:job.location,

description:job.description,

applyLink:job.applyLink,

salary:job.salary || "",

employmentType:job.employmentType || "",

experience:job.experience || "",

education:job.education || "",

skills:job.skills?.join(", ") || ""

});


window.scrollTo({

top:0,

behavior:"smooth"

});


}}

>

Edit

</button>





<button

style={deleteButtonStyle}

onClick={()=>handleDelete(job._id)}

>

Delete

</button>


</>


}



</div>



</div>



))

}








{/* PAGINATION */}


{

totalPages>1 &&


<div

style={paginationContainer}

>


<button

disabled={page===1}

style={paginationButton}

onClick={()=>setPage(page-1)}

>

◀ Previous

</button>




{

[...Array(totalPages)].map((_,index)=>(


<button

key={index}

style={{

...paginationButton,

background:

page===index+1

?

"#2563eb"

:

"#fff",

color:

page===index+1

?

"#fff"

:

"#000"

}}

onClick={()=>setPage(index+1)}

>

{index+1}

</button>


))

}





<button

disabled={page===totalPages}

style={paginationButton}

onClick={()=>setPage(page+1)}

>

Next ▶

</button>


</div>


}



</div>


);

}






const inputStyle={

width:"100%",

padding:"14px",

borderRadius:"12px",

border:"1px solid #d1d5db",

fontSize:"15px",

boxSizing:"border-box",

background:"#fff"

};




const searchStyle={

...inputStyle,

marginBottom:"25px",

boxShadow:
"0 5px 15px rgba(0,0,0,.05)"

};




const textareaStyle={

...inputStyle,

height:"120px",

resize:"none"

};




const formCard={

background:"#fff",

padding:"35px",

borderRadius:"22px",

boxShadow:
"0 15px 35px rgba(15,23,42,.08)",

marginBottom:"40px"

};




const buttonStyle={

width:"100%",

padding:"14px",

border:"none",

borderRadius:"12px",

background:
"linear-gradient(135deg,#2563eb,#4f46e5)",

color:"#fff",

fontWeight:"700",

cursor:"pointer"

};




const cardStyle={

background:"#fff",

padding:"30px",

borderRadius:"20px",

marginBottom:"25px",

boxShadow:
"0 10px 30px rgba(15,23,42,.08)"

};




const applyButton={

padding:"12px 20px",

background:"#2563eb",

color:"#fff",

borderRadius:"10px",

textDecoration:"none",

fontWeight:"600"

};




const editButton={

padding:"12px 20px",

background:"#f59e0b",

color:"#fff",

border:"none",

borderRadius:"10px",

cursor:"pointer"

};




const deleteButtonStyle={

padding:"12px 20px",

background:"#dc2626",

color:"#fff",

border:"none",

borderRadius:"10px",

cursor:"pointer"

};




const paginationContainer={

display:"flex",

justifyContent:"center",

gap:"10px",

marginTop:"35px",

flexWrap:"wrap"

};




const paginationButton={

padding:"10px 16px",

border:"none",

borderRadius:"10px",

cursor:"pointer",

boxShadow:
"0 3px 10px rgba(0,0,0,.1)"

};



export default Jobs;







