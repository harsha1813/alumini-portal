
// import { useEffect, useState } from "react";
// import { getUsers } from "../services/userService";

// function AlumniDirectory() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const data = await getUsers();
//         setUsers(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
   
//     <div className="p-6">
//       <h1>Alumni Directory</h1>

//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Branch</th>
            

//           </tr>
//         </thead>

//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.role}</td>
//               <td>{user.branch}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
   
//   );
// };
// export default AlumniDirectory;

import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";

function AlumniDirectory() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {

    const fetchUsers = async () => {

      try {

        const data = await getUsers();

        setUsers(data);

      } catch (error) {

        console.log(error);

      }

    };


    fetchUsers();

  }, []);




  const filteredUsers = users.filter((user)=>

    user.name
    ?.toLowerCase()
    .includes(search.toLowerCase())

  );



  return (

    <div

      style={{

        width:"100%",

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

          borderRadius:"20px",

          color:"#fff",

          marginBottom:"30px"

        }}

      >

        <h1

          style={{

            fontSize:"36px",

            marginBottom:"10px"

          }}

        >

          Alumni Directory 🤝

        </h1>


        <p

          style={{

            fontSize:"16px",

            opacity:"0.9"

          }}

        >

          Connect with alumni, explore experiences,
          and build your professional network.

        </p>


      </div>





      {/* Search */}


      <div

        style={{

          background:"#fff",

          padding:"20px",

          borderRadius:"15px",

          boxShadow:
          "0 8px 20px rgba(0,0,0,.06)",

          marginBottom:"30px"

        }}

      >


        <input

          type="text"

          placeholder="Search alumni by name..."

          value={search}

          onChange={(e)=>setSearch(e.target.value)}

          style={{

            width:"100%",

            height:"48px",

            padding:"0 15px",

            borderRadius:"10px",

            border:"1px solid #d1d5db",

            fontSize:"15px",

            outline:"none"

          }}

        />


      </div>







      {/* Alumni Cards */}


      <div

        style={{

          display:"grid",

          gridTemplateColumns:
          "repeat(auto-fit,minmax(280px,1fr))",

          gap:"25px"

        }}

      >


        {

          filteredUsers.map((user)=>(


            <div

              key={user._id}

              style={cardStyle}

            >



              {/* Avatar */}

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

                  fontSize:"25px",

                  fontWeight:"700",

                  marginBottom:"15px"

                }}

              >

                {user.name?.charAt(0).toUpperCase()}

              </div>





              <h2

                style={{

                  margin:"0 0 8px",

                  color:"#111827",

                  fontSize:"20px"

                }}

              >

                {user.name}

              </h2>



              <p style={textStyle}>

                📧 {user.email}

              </p>


              <p style={textStyle}>

                🎓 {user.branch || "Not Available"}

              </p>


              <span

                style={{

                  display:"inline-block",

                  marginTop:"10px",

                  padding:"6px 14px",

                  borderRadius:"20px",

                  background:
                  user.role==="alumni"
                  ? "#dcfce7"
                  : "#dbeafe",

                  color:
                  user.role==="alumni"
                  ? "#15803d"
                  : "#2563eb",

                  fontWeight:"600",

                  fontSize:"13px"

                }}

              >

                {user.role}

              </span>



            </div>


          ))

        }


      </div>




    </div>

  );

}





const cardStyle = {

  background:"#ffffff",

  padding:"25px",

  borderRadius:"18px",

  boxShadow:
  "0 10px 25px rgba(15,23,42,.08)",

  border:
  "1px solid #e5e7eb",

  transition:"0.3s",

};



const textStyle = {

  color:"#64748b",

  fontSize:"14px",

  margin:"8px 0"

};



export default AlumniDirectory;