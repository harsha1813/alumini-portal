import {
  FaHome,
  FaBriefcase,
  FaUsers,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaUserGraduate,
  FaClipboardList,
  FaChartBar,
  FaCog
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function Sidebar() {

  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  // const logout = () => {

  //   localStorage.removeItem("userInfo");

  //   navigate("/login");

  // };

  const logout = () => {

localStorage.removeItem("userInfo");

navigate("/", { replace: true });

};

 const studentMenu = [

  {
    name: "Dashboard",
    icon: <FaHome />,
    path: "/student-dashboard"
  },

  {
    name: "Jobs",
    icon: <FaBriefcase />,
    path: "/jobs"
  },

  {
    name: "My Applications",
    icon: <FaClipboardList />,
    path: "/my-applications"
  },

  {
    name: "Directory",
    icon: <FaUsers />,
    path: "/directory"
  },

  {
    name: "Profile",
    icon: <FaUser />,
    path: "/profile"
  }

];

  const alumniMenu = [

    {
      name: "Dashboard",
      icon: <FaHome />,
      path: "/alumni-dashboard"
    },

    {
      name: "Post Jobs",
      icon: <FaBriefcase />,
      path: "/jobs"
    },

    {
      name: "Applicants",
      icon: <FaClipboardList />,
      path: "/applications"
    },

    {
      name: "Alumni Directory",
      icon: <FaUsers />,
      path: "/directory"
    },

    {
      name: "Profile",
      icon: <FaUser />,
      path: "/profile"
    }

  ];

  const adminMenu = [

    {
      name: "Dashboard",
      icon: <FaHome />,
      path: "/admin-dashboard"
    },

    {
      name: "Users",
      icon: <FaUserGraduate />,
      path: "/users"
    },

    {
      name: "Jobs",
      icon: <FaBriefcase />,
      path: "/jobs"
    },

    {
      name: "Analytics",
      icon: <FaChartBar />,
      path: "/analytics"
    },

    {
      name: "Settings",
      icon: <FaCog />,
      path: "/settings"
    }

  ];

  const menu =
    userInfo.role === "student"
      ? studentMenu
      : userInfo.role === "alumni"
      ? alumniMenu
      : adminMenu;

  return (

    <div
  style={{
    width: collapsed ? "75px" : "210px",
    transition: "width .3s ease",
    background: "#ffffff",
    color: "#111827",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    boxShadow: "2px 0 12px rgba(0,0,0,.08)"
  }}
>

      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px"
        }}
      >

        {!collapsed && (

          <h2
            style={{
              margin: 0,
              color: "#2563eb"
            }}
          >
            🎓 Alumni Portal
          </h2>

        )}

        <FaBars
          size={22}
          style={{ cursor: "pointer" }}
          onClick={() =>
            setCollapsed(!collapsed)
          }
        />

      </div>

      {/* Menu */}

      <div style={{ flex: 1 }}>

        {menu.map((item) => (

          <NavLink
            key={item.name}
            to={item.path}
            style={({ isActive }) => ({

              display: "flex",
              alignItems: "center",
              gap: "12px",

              padding: "14px 18px",

              textDecoration: "none",

              color: isActive
                ? "#2563eb"
                : "#374151",

              background: isActive
                ? "#EFF6FF"
                : "transparent",

              fontWeight:
                isActive
                  ? "bold"
                  : "500",

              transition: ".2s"

            })}
          >

            <span
              style={{
                fontSize: "20px"
              }}
            >
              {item.icon}
            </span>

            {!collapsed &&
              item.name}

          </NavLink>

        ))}

      </div>

      {/* User */}

      <div
        style={{
          padding: "20px",
          borderTop: "1px solid #e5e7eb"
        }}
      >

        {!collapsed && (

          <>

            <strong>
              {userInfo.name}
            </strong>

            <br />

            <small>
              {userInfo.role.toUpperCase()}
            </small>

            <br />
            <br />

          </>

        )}

        <button
          onClick={logout}
          style={{
            width: "100%",
            background: "#dc2626",
            color: "#fff",
            border: "none",
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >

          <FaSignOutAlt />

          {!collapsed &&
            " Logout"}

        </button>

      </div>

    </div>

  );

}

export default Sidebar;