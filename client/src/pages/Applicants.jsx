import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMyJobs } from "../services/applicationService";

function Applicants() {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    loadJobs();
  }, []);



  const loadJobs = async () => {

    try {
      const data = await getMyJobs();
      setJobs(data);
    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  };
  if (loading)

    return (

      <div
        style={{

          minHeight:"70vh",

          display:"flex",

          justifyContent:"center",

          alignItems:"center",

          background:"#f8fafc",

          fontFamily:"Inter, Segoe UI, sans-serif"

        }}

      >

        <h2 style={{color:"#2563eb"}}>
          Loading Applicants...
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

            margin:0,

            fontSize:"36px"

          }}

        >

          📋 My Posted Jobs

        </h1>


        <p

          style={{

            marginTop:"10px",

            opacity:.9,

            fontSize:"16px"

          }}

        >

          Manage your job posts and review applicants.

        </p>


      </div>







      {

        jobs.length === 0 ?


        (

          <div

            style={emptyStyle}

          >

            <h3>
              You haven't posted any jobs yet.
            </h3>

            <p>
              Create a job posting to start receiving applications.
            </p>

          </div>

        )


        :


        (

          <div

            style={{

              display:"grid",

              gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",

              gap:"25px"

            }}

          >


          {

            jobs.map((job)=>(


              <div

                key={job._id}

                style={cardStyle}

              >



                <div

                  style={{

                    width:"55px",

                    height:"55px",

                    borderRadius:"14px",

                    background:
                    "linear-gradient(135deg,#2563eb,#7c3aed)",

                    display:"flex",

                    alignItems:"center",

                    justifyContent:"center",

                    color:"#fff",

                    fontSize:"24px",

                    marginBottom:"15px"

                  }}

                >

                  💼

                </div>





                <h2

                  style={{

                    color:"#111827",

                    marginBottom:"12px"

                  }}

                >

                  {job.title}

                </h2>




                <p style={infoStyle}>

                  🏢 <b>Company:</b> {job.company}

                </p>



                <p style={infoStyle}>

                  👥 <b>Applicants:</b>

                  <span

                    style={{

                      color:"#2563eb",

                      fontWeight:"700",

                      marginLeft:"5px"

                    }}

                  >

                    {job.applicants}

                  </span>

                </p>





                <div

                  style={{

                    height:"1px",

                    background:"#e5e7eb",

                    margin:"20px 0"

                  }}

                />





                <Link

                  to={`/applications/${job._id}`}

                  style={buttonStyle}

                >

                  View Applicants →

                </Link>



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

  borderRadius:"20px",

  boxShadow:
  "0 10px 30px rgba(15,23,42,.08)",

  border:
  "1px solid #e5e7eb",

  transition:"0.3s"

};




const infoStyle = {

  color:"#64748b",

  fontSize:"15px",

  margin:"12px 0"

};




const buttonStyle = {

  display:"inline-block",

  width:"100%",

  textAlign:"center",

  padding:"13px",

  background:
  "linear-gradient(135deg,#2563eb,#4f46e5)",

  color:"#fff",

  borderRadius:"12px",

  textDecoration:"none",

  fontWeight:"700",

  boxSizing:"border-box"

};




const emptyStyle = {

  background:"#fff",

  padding:"40px",

  borderRadius:"20px",

  textAlign:"center",

  color:"#64748b",

  boxShadow:
  "0 10px 25px rgba(0,0,0,.06)"

};

export default Applicants;