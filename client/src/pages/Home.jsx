// import { Navigate, Link } from "react-router-dom";

// function Home() {

//   const user = JSON.parse(localStorage.getItem("userInfo"));

//   if (user) {

//     if (user.role === "student")
//       return <Navigate to="/student-dashboard" />;

//     if (user.role === "alumni")
//       return <Navigate to="/alumni-dashboard" />;

//     if (user.role === "admin")
//       return <Navigate to="/admin-dashboard" />;

//   }

//   return (

//     <div style={{textAlign:"center",marginTop:"120px"}}>

//       <h1>Alumni Portal</h1>

//       <p>Connecting Students and Alumni</p>

//       <Link to="/login">
//         <button>Login</button>
//       </Link>

//       <Link to="/register">
//         <button style={{marginLeft:"15px"}}>
//           Register
//         </button>
//       </Link>

//     </div>

//   );

// }

// export default Home;

import { useState } from "react";
import { Navigate, Link } from "react-router-dom";

function Home() {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const [hover, setHover] = useState(false);
  if (user) {
    if (user.role === "student")
      return <Navigate to="/student-dashboard" />;

    if (user.role === "alumni")
      return <Navigate to="/alumni-dashboard" />;

    if (user.role === "admin")
      return <Navigate to="/admin-dashboard" />;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          height: "75px",
          background: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 70px",
          boxShadow: "0 2px 15px rgba(0,0,0,0.05)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <h2 style={{ color: "#2563EB", margin: 0 }}>Alumni Portal</h2>

        <div style={{ display: "flex", gap: "15px" }}>
          <Link to="/login">
            <button
              style={{
                padding: "10px 22px",
                borderRadius: "8px",
                border: "1px solid #2563EB",
                background: "#fff",
                color: "#2563EB",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Login
            </button>
          </Link>

          <Link to="/register">
            <button
              style={{
                padding: "10px 22px",
                borderRadius: "8px",
                border: "none",
                background: "#2563EB",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Register
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "80px 70px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: "550px" }}>
          <span
            style={{
              background: "#DBEAFE",
              color: "#2563EB",
              padding: "8px 18px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            🎓 Student • Alumni Network
          </span>

          <h1
            style={{
              fontSize: "52px",
              margin: "25px 0 20px",
              color: "#0F172A",
              lineHeight: "1.2",
            }}
          >
            Connect.
            <br />
            Learn.
            <br />
            Grow Together.
          </h1>

          <p
            style={{
              color: "#64748B",
              fontSize: "18px",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}
          >
            Build meaningful connections with alumni, discover internships,
            receive mentorship, and unlock career opportunities—all in one
            platform.
          </p>

          <div style={{ display: "flex", gap: "18px" }}>
            <Link to="/register">
 <Link to="/register">
  <button
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    style={{
      background: "#2563EB",
      color: "#fff",
      border: "none",
      padding: "15px 32px",
      borderRadius: "10px",
      fontWeight: "600",
      fontSize: "16px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: hover
        ? "0 15px 30px rgba(37,99,235,.4)"
        : "0 10px 25px rgba(37,99,235,.3)",
      transform: hover ? "translateY(-2px)" : "translateY(0)",
    }}
  >
    {hover ? "Register Now →" : "Get Started"}
  </button>
</Link>
</Link>

            <Link to="/login">
              <button
                style={{
                  background: "#fff",
                  color: "#2563EB",
                  border: "2px solid #2563EB",
                  padding: "15px 32px",
                  borderRadius: "10px",
                  fontWeight: "600",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* Hero Illustration */}
        <div
          style={{
            width: "450px",
            height: "450px",
            background:
              "linear-gradient(135deg,#2563EB,#60A5FA)",
            borderRadius: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "120px",
            boxShadow: "0 20px 40px rgba(37,99,235,.25)",
          }}
        >
          🎓
        </div>
      </section>

      {/* Features */}
      <section
        style={{
          padding: "0 70px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: "25px",
        }}
      >
        {[
          {
            icon: "🤝",
            title: "Networking",
            text: "Build strong professional relationships with alumni.",
          },
          {
            icon: "💼",
            title: "Internships",
            text: "Find internships and career opportunities.",
          },
          {
            icon: "🎯",
            title: "Mentorship",
            text: "Receive career guidance from experienced professionals.",
          },
          {
            icon: "📈",
            title: "Career Growth",
            text: "Develop skills and explore new opportunities.",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "18px",
              boxShadow: "0 10px 25px rgba(0,0,0,.05)",
            }}
          >
            <div style={{ fontSize: "45px" }}>{item.icon}</div>

            <h3
              style={{
                marginTop: "20px",
                color: "#0F172A",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#64748B",
                lineHeight: "1.7",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;