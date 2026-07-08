import { useState, useEffect } from "react";
import { updateProfile, getProfile } from "../services/userService";


const user = JSON.parse(
  localStorage.getItem("userInfo")
);


function Profile() {


  const [form, setForm] = useState({

    name: user.name || "",

    phone: user.phone || "",

    branch: user.branch || "",

    graduationYear: user.graduationYear || "",

    resumeLink: user.resumeLink || "",

    linkedin: user.linkedin || "",

    github: user.github || "",

    about: user.about || ""

  });




  const [hover, setHover] = useState(false);




  useEffect(() => {


    const loadProfile = async () => {


      try {


        const data = await getProfile();


        setForm({

          name:data.name || "",

          phone:data.phone || "",

          branch:data.branch || "",

          graduationYear:data.graduationYear || "",

          resumeLink:data.resumeLink || "",

          linkedin:data.linkedin || "",

          github:data.github || "",

          about:data.about || ""

        });



      } catch(err) {

        console.log(err);

      }


    };


    loadProfile();


  }, []);







  const changeHandler = (e)=>{


    setForm({

      ...form,

      [e.target.name]:e.target.value

    });


  };







  const saveProfile = async()=>{


    try{


      const data = await updateProfile(form);



      localStorage.setItem(

        "userInfo",

        JSON.stringify({

          ...user,

          ...data

        })

      );



      alert("Profile Updated");



    }

    catch(error){


      alert("Failed");


    }


  };






  return (


    <div

      style={{

        minHeight:"100vh",

        background:"#f8fafc",

        padding:"20px",

        fontFamily:
        "Inter, Segoe UI, sans-serif"

      }}

    >





      <div

        style={{

          maxWidth:"900px",

          margin:"auto",

          background:"#fff",

          borderRadius:"22px",

          overflow:"hidden",

          boxShadow:
          "0 15px 35px rgba(15,23,42,.08)"

        }}

      >





        {/* Header */}



        <div

          style={{

            background:
            "linear-gradient(135deg,#2563eb,#4f46e5)",

            padding:"35px",

            color:"#fff"

          }}

        >



          <div

            style={{

              width:"80px",

              height:"80px",

              borderRadius:"50%",

              background:"#fff",

              color:"#2563eb",

              display:"flex",

              alignItems:"center",

              justifyContent:"center",

              fontSize:"32px",

              fontWeight:"700",

              marginBottom:"15px"

            }}

          >

            {form.name?.charAt(0).toUpperCase()}


          </div>





          <h1

            style={{

              margin:0,

              fontSize:"32px"

            }}

          >

            My Profile

          </h1>



          <p

            style={{

              opacity:.9,

              marginTop:"8px"

            }}

          >

            Manage your professional information

          </p>



        </div>








        {/* Form */}



        <div

          style={{

            padding:"35px"

          }}

        >



          <div

            style={{

              display:"grid",

              gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",

              gap:"20px"

            }}

          >




            <Input

              label="Full Name"

              name="name"

              value={form.name}

              onChange={changeHandler}

            />



            <Input

              label="Phone"

              name="phone"

              value={form.phone}

              onChange={changeHandler}

            />



            <Input

              label="Branch"

              name="branch"

              value={form.branch}

              onChange={changeHandler}

            />



            <Input

              label="Graduation Year"

              name="graduationYear"

              value={form.graduationYear}

              onChange={changeHandler}

            />



            <Input

              label="Resume Link"

              name="resumeLink"

              value={form.resumeLink}

              onChange={changeHandler}

            />



            <Input

              label="LinkedIn"

              name="linkedin"

              value={form.linkedin}

              onChange={changeHandler}

            />



            <Input

              label="GitHub"

              name="github"

              value={form.github}

              onChange={changeHandler}

            />



          </div>





          <label style={labelStyle}>

            About Me

          </label>



          <textarea

            name="about"

            value={form.about}

            onChange={changeHandler}

            placeholder="Tell something about yourself..."

            style={textareaStyle}

          />






          <button

            onClick={saveProfile}

            onMouseEnter={()=>setHover(true)}

            onMouseLeave={()=>setHover(false)}

            style={{

              ...buttonStyle,

              background:hover
              ? "#1d4ed8"
              : "#2563eb",

              transform:hover
              ? "translateY(-2px)"
              :"translateY(0)"

            }}

          >

            Save Profile ✓

          </button>



        </div>



      </div>



    </div>


  );

}






function Input({

label,

name,

value,

onChange

}){


return (

<div>


<label style={labelStyle}>

{label}

</label>


<input

name={name}

value={value}

onChange={onChange}

style={inputStyle}

/>


</div>

);


}







const labelStyle = {


display:"block",

fontWeight:"600",

fontSize:"14px",

color:"#374151",

marginBottom:"8px"


};





const inputStyle = {


width:"100%",

height:"48px",

borderRadius:"10px",

border:"1px solid #d1d5db",

padding:"0 14px",

fontSize:"15px",

outline:"none",

boxSizing:"border-box"


};





const textareaStyle = {


width:"100%",

height:"120px",

marginTop:"8px",

borderRadius:"12px",

border:"1px solid #d1d5db",

padding:"15px",

fontSize:"15px",

resize:"none",

outline:"none",

boxSizing:"border-box"


};





const buttonStyle = {


width:"100%",

height:"50px",

marginTop:"25px",

border:"none",

borderRadius:"12px",

color:"#fff",

fontWeight:"700",

fontSize:"16px",

cursor:"pointer",

transition:"0.3s"


};




export default Profile;
