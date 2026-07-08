import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
    graduationYear: "",
    branch: "",
    company: "",
    designation: "",
  });

  const [hover, setHover] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await registerUser(formData);

      localStorage.setItem("userInfo", JSON.stringify(data));

      alert("Registration Successful");

      navigate("/login");
    } catch (error) {
      alert("Registration Failed");
    }
  };

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      background: "#F8FAFC",
      fontFamily: "Inter, Segoe UI, sans-serif",
    },

    left: {
      flex: 1,
      background:
        "linear-gradient(135deg,#2563EB,#4F46E5)",
      color: "white",
      padding: "70px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    logo: {
      fontSize: "30px",
      fontWeight: "700",
      marginBottom: "50px",
    },

    heroTitle: {
      fontSize: "48px",
      lineHeight: "1.2",
      marginBottom: "20px",
      fontWeight: "700",
    },

    heroText: {
      fontSize: "18px",
      lineHeight: "1.7",
      opacity: "0.9",
      maxWidth: "450px",
    },

    features: {
      marginTop: "40px",
    },

    feature: {
      marginBottom: "18px",
      fontSize: "17px",
    },

    right: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px",
    },

    card: {
      width: "100%",
      maxWidth: "520px",
      background: "#FFFFFF",
      padding: "40px",
      borderRadius: "22px",
      boxShadow:
        "0 20px 50px rgba(15,23,42,0.10)",
      border: "1px solid #E5E7EB",
    },

    title: {
      fontSize: "34px",
      color: "#111827",
      marginBottom: "8px",
    },

    subtitle: {
      color: "#6B7280",
      marginBottom: "30px",
    },

    label: {
      display: "block",
      fontWeight: "600",
      color: "#374151",
      marginBottom: "7px",
      fontSize: "14px",
    },

    input: {
      width: "100%",
      height: "50px",
      padding: "0 15px",
      borderRadius: "12px",
      border: "1px solid #D1D5DB",
      marginBottom: "18px",
      fontSize: "15px",
      outline: "none",
      boxSizing: "border-box",
      transition: "0.3s",
    },

    row: {
      display: "flex",
      gap: "15px",
    },

    column: {
      flex: 1,
    },

    button: {
      width: "100%",
      height: "52px",
      borderRadius: "12px",
      border: "none",
      background: hover ? "#1D4ED8" : "#2563EB",
      color: "white",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      marginTop: "10px",
      transform: hover
        ? "translateY(-2px)"
        : "translateY(0)",
      boxShadow: hover
        ? "0 15px 30px rgba(37,99,235,.3)"
        : "none",
      transition: "0.3s",
    },

    footer: {
      textAlign: "center",
      marginTop: "25px",
      color: "#6B7280",
    },

    login: {
      color: "#2563EB",
      fontWeight: "700",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.page}>

      {/* LEFT SIDE */}
      <div style={styles.left}>

        <div style={styles.logo}>
          🎓 Alumni Portal
        </div>

        <h1 style={styles.heroTitle}>
          Connect.
          <br />
          Learn.
          <br />
          Grow.
        </h1>

        <p style={styles.heroText}>
          Build your professional network with alumni,
          discover opportunities, and get career guidance
          from experienced professionals.
        </p>


        <div style={styles.features}>

          <div style={styles.feature}>
            ✓ Alumni Mentorship
          </div>

          <div style={styles.feature}>
            ✓ Internship Opportunities
          </div>

          <div style={styles.feature}>
            ✓ Professional Networking
          </div>

          <div style={styles.feature}>
            ✓ Career Growth
          </div>

        </div>

      </div>


      {/* RIGHT SIDE */}
      <div style={styles.right}>

        <div style={styles.card}>

          <h1 style={styles.title}>
            Create Account
          </h1>

          <p style={styles.subtitle}>
            Join our alumni community today
          </p>


          <form onSubmit={handleSubmit}>


            <label style={styles.label}>
              👤 Full Name
            </label>

            <input
              style={styles.input}
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />


            <label style={styles.label}>
              📧 Email Address
            </label>

            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />


            <label style={styles.label}>
              🔒 Password
            </label>

            <input
              style={styles.input}
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />


            <label style={styles.label}>
              Role
            </label>

            <select
              style={styles.input}
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="student">
                Student
              </option>

              <option value="alumni">
                Alumni
              </option>

            </select>



            <div style={styles.row}>

              <div style={styles.column}>

                <label style={styles.label}>
                  Graduation Year
                </label>

                <input
                  style={styles.input}
                  type="text"
                  name="graduationYear"
                  placeholder="2025"
                  value={formData.graduationYear}
                  onChange={handleChange}
                />

              </div>


              <div style={styles.column}>

                <label style={styles.label}>
                  Branch
                </label>

                <input
                  style={styles.input}
                  type="text"
                  name="branch"
                  placeholder="Computer Science"
                  value={formData.branch}
                  onChange={handleChange}
                />

              </div>

            </div>



            {formData.role === "alumni" && (

              <>

                <label style={styles.label}>
                  🏢 Current Company
                </label>

                <input
                  style={styles.input}
                  type="text"
                  name="company"
                  placeholder="Google"
                  value={formData.company}
                  onChange={handleChange}
                />


                <label style={styles.label}>
                  💼 Designation
                </label>

                <input
                  style={styles.input}
                  type="text"
                  name="designation"
                  placeholder="Software Engineer"
                  value={formData.designation}
                  onChange={handleChange}
                />

              </>

            )}



            <button
              type="submit"
              style={styles.button}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Create Account →
            </button>


          </form>


          <div style={styles.footer}>
            Already have an account?{" "}

            <span
              style={styles.login}
              onClick={() => navigate("/login")}
            >
              Login
            </span>

          </div>


        </div>

      </div>

    </div>
  );
}

export default Register;

// ------------------------------------------------------------------------
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../services/authService";

// function Register() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "student",
//     graduationYear: "",
//     branch: "",
//     company: "",
//     designation: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log(formData);

//     try {
//       const data = await registerUser(formData);

//       localStorage.setItem("userInfo", JSON.stringify(data));

//       alert("Registration Successful");

//       navigate("/login");
//     } catch (error) {
//       alert("Registration Failed");
//     }
//   };

//   const styles = {
//     page: {
//       minHeight: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       background:
//         "linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%)",
//       padding: "30px",
//       fontFamily: "Segoe UI, sans-serif",
//     },

//     card: {
//       background: "#fff",
//       width: "100%",
//       maxWidth: "520px",
//       borderRadius: "18px",
//       padding: "35px",
//       boxShadow: "0 20px 45px rgba(0,0,0,0.18)",
//     },

//     heading: {
//       textAlign: "center",
//       marginBottom: "30px",
//     },

//     title: {
//       fontSize: "32px",
//       marginBottom: "8px",
//       color: "#111827",
//     },

//     subtitle: {
//       color: "#6B7280",
//       fontSize: "15px",
//     },

//     label: {
//       display: "block",
//       marginBottom: "6px",
//       fontWeight: "600",
//       color: "#374151",
//     },

//     input: {
//       width: "100%",
//       padding: "13px",
//       borderRadius: "10px",
//       border: "1px solid #D1D5DB",
//       outline: "none",
//       marginBottom: "18px",
//       fontSize: "15px",
//       boxSizing: "border-box",
//     },

//     row: {
//       display: "flex",
//       gap: "15px",
//     },

//     column: {
//       flex: 1,
//     },

//     button: {
//       width: "100%",
//       padding: "15px",
//       borderRadius: "10px",
//       border: "none",
//       background: "#2563EB",
//       color: "white",
//       fontWeight: "bold",
//       fontSize: "16px",
//       cursor: "pointer",
//       marginTop: "10px",
//     },

//     footer: {
//       textAlign: "center",
//       marginTop: "25px",
//       color: "#6B7280",
//     },

//     login: {
//       color: "#2563EB",
//       cursor: "pointer",
//       fontWeight: "bold",
//     },
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.card}>
//         <div style={styles.heading}>
//           <h1 style={styles.title}>Create Account</h1>
//           <p style={styles.subtitle}>
//             Welcome to the Alumni Management Portal
//           </p>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <label style={styles.label}>Full Name</label>
//           <input
//             style={styles.input}
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleChange}
//           />

//           <label style={styles.label}>Email Address</label>
//           <input
//             style={styles.input}
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//           />

//           <label style={styles.label}>Password</label>
//           <input
//             style={styles.input}
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={handleChange}
//           />

//           <label style={styles.label}>Role</label>
//           <select
//             style={styles.input}
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//           >
//             <option value="student">Student</option>
//             <option value="alumni">Alumni</option>
//           </select>

//           <div style={styles.row}>
//             <div style={styles.column}>
//               <label style={styles.label}>Graduation Year</label>
//               <input
//                 style={styles.input}
//                 type="text"
//                 name="graduationYear"
//                 placeholder="2025"
//                 value={formData.graduationYear}
//                 onChange={handleChange}
//               />
//             </div>

//             <div style={styles.column}>
//               <label style={styles.label}>Branch</label>
//               <input
//                 style={styles.input}
//                 type="text"
//                 name="branch"
//                 placeholder="Computer Science"
//                 value={formData.branch}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           {formData.role === "alumni" && (
//             <>
//               <label style={styles.label}>Current Company</label>
//               <input
//                 style={styles.input}
//                 type="text"
//                 name="company"
//                 placeholder="Google"
//                 value={formData.company}
//                 onChange={handleChange}
//               />

//               <label style={styles.label}>Designation</label>
//               <input
//                 style={styles.input}
//                 type="text"
//                 name="designation"
//                 placeholder="Software Engineer"
//                 value={formData.designation}
//                 onChange={handleChange}
//               />
//             </>
//           )}

//           <button
//             type="submit"
//             style={styles.button}
//             onMouseOver={(e) => (e.target.style.background = "#1D4ED8")}
//             onMouseOut={(e) => (e.target.style.background = "#2563EB")}
//           >
//             Create Account
//           </button>
//         </form>

//         <div style={styles.footer}>
//           Already have an account?{" "}
//           <span style={styles.login} onClick={() => navigate("/login")}>
//             Login
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;