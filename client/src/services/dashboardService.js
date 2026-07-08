import axios from "axios";

// const API_URL =
// "http://localhost:5000/api/dashboard";

const API_URL =
`${import.meta.env.VITE_API_URL}/dashboard`;

export const getDashboardStats = async () => {

  const userInfo =
  JSON.parse(localStorage.getItem("userInfo"));

  const config = {
    headers: {
      Authorization:
      `Bearer ${userInfo.token}`
    }
  };

  const response =
  await axios.get(
    `${API_URL}/stats`,
    config
  );

  return response.data;
};