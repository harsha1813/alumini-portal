// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../services/authService";

// function Login() {
//     const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const data = await loginUser(formData);
//       localStorage.setItem(
//   "userInfo",
//   JSON.stringify(data)
// );

// alert("Login Successful");

// // Redirect according to role
// if (data.role === "student") {
//   navigate("/student-dashboard");
// }
// else if (data.role === "alumni") {
//   navigate("/alumni-dashboard");
// }
// else if (data.role === "admin") {
//   navigate("/admin-dashboard");
// }

//     } catch (error) {
//       alert("Login Failed");
//     }
// };
//   return (
//     <div>
//       <h1>Login</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//         />

//         <button type="submit">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [hover, setHover] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const data = await loginUser(formData);

  //     localStorage.setItem(
  //       "userInfo",
  //       JSON.stringify(data)
  //     );

  //     alert("Login Successful");

  //     if (data.role === "student") {
  //       navigate("/student-dashboard");
  //     }
  //     else if (data.role === "alumni") {
  //       navigate("/alumni-dashboard");
  //     }
  //     else if (data.role === "admin") {
  //       navigate("/admin-dashboard");
  //     }

  //   } catch (error) {
  //     alert("Login Failed");
  //   }
  // };


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = await loginUser(formData);

    localStorage.setItem(
      "userInfo",
      JSON.stringify(data)
    );

    alert("Login Successful");

    if (data.role === "student") {
      navigate("/student-dashboard");
    } else if (data.role === "alumni") {
      navigate("/alumni-dashboard");
    } else if (data.role === "admin") {
      navigate("/admin-dashboard");
    }

  } catch (error) {

    if (error.response) {
      // Message sent by your backend
      alert(error.response.data.message);
    } else {
      alert("Server is not responding.");
    }

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
      color: "#fff",
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


    heading: {
      fontSize: "48px",
      lineHeight: "1.2",
      marginBottom: "20px",
    },


    description: {
      fontSize: "18px",
      lineHeight: "1.7",
      maxWidth: "450px",
      opacity: "0.9",
    },


    points: {
      marginTop: "40px",
    },


    point: {
      fontSize: "17px",
      marginBottom: "18px",
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
      maxWidth: "450px",
      background: "#fff",
      padding: "45px",
      borderRadius: "22px",
      boxShadow:
        "0 20px 50px rgba(15,23,42,0.12)",
      border: "1px solid #E5E7EB",
    },


    title: {
      fontSize: "36px",
      color: "#111827",
      marginBottom: "10px",
    },


    subtitle: {
      color: "#6B7280",
      marginBottom: "35px",
    },


    label: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#374151",
      display: "block",
      marginBottom: "8px",
    },


    input: {
      width: "100%",
      height: "52px",
      borderRadius: "12px",
      border: "1px solid #D1D5DB",
      padding: "0 15px",
      fontSize: "15px",
      marginBottom: "22px",
      outline: "none",
      boxSizing: "border-box",
    },


    button: {
      width: "100%",
      height: "52px",
      borderRadius: "12px",
      border: "none",
      background: hover
        ? "#1D4ED8"
        : "#2563EB",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "0.3s",
      transform: hover
        ? "translateY(-2px)"
        : "translateY(0)",
      boxShadow: hover
        ? "0 15px 30px rgba(37,99,235,.35)"
        : "none",
    },


    footer: {
      textAlign: "center",
      marginTop: "25px",
      color: "#6B7280",
    },


    register: {
      color: "#2563EB",
      fontWeight: "700",
      cursor: "pointer",
    },

  };


  return (

    <div style={styles.page}>


      {/* LEFT SECTION */}

      <div style={styles.left}>

        <div style={styles.logo}>
          🎓 Alumni Portal
        </div>


        <h1 style={styles.heading}>
          Welcome
          <br />
          Back!
        </h1>


        <p style={styles.description}>
          Login to continue your journey with
          alumni, mentors, and career opportunities.
        </p>


        <div style={styles.points}>

          <div style={styles.point}>
            ✓ Connect with Alumni
          </div>


          <div style={styles.point}>
            ✓ Discover Opportunities
          </div>


          <div style={styles.point}>
            ✓ Build Your Career
          </div>


          <div style={styles.point}>
            ✓ Grow Your Network
          </div>

        </div>


      </div>



      {/* LOGIN CARD */}

      <div style={styles.right}>


        <div style={styles.card}>


          <h1 style={styles.title}>
            Login
          </h1>


          <p style={styles.subtitle}>
            Enter your details to access your account
          </p>



          <form onSubmit={handleSubmit}>


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



            <button
              type="submit"
              style={styles.button}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Login →
            </button>


          </form>



          <div style={styles.footer}>

            Don't have an account?{" "}

            <span
              style={styles.register}
              onClick={() => navigate("/register")}
            >
              Register
            </span>


          </div>


        </div>


      </div>


    </div>

  );
}

export default Login;