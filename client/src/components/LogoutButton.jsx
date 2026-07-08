import { useNavigate } from "react-router-dom";

function LogoutButton() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("userInfo");

    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        background: "#dc2626",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold"
      }}
    >
      Logout
    </button>
  );
}

export default LogoutButton;