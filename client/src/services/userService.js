// import axios from "axios";

// const API_URL = "http://localhost:5000/api/users";

// export const getUsers = async () => {
//   const userInfo = JSON.parse(
//     localStorage.getItem("userInfo")
//   );

//   const config = {
//     headers: {
//       Authorization: `Bearer ${userInfo.token}`
//     }
//   };

//   const response = await axios.get(
//     API_URL,
//     config
//   );

//   return response.data;
// };
import axios from "axios";

// const API = "http://localhost:5000/api/users";

const API =
`${import.meta.env.VITE_API_URL}/users`;

const token = () =>
  JSON.parse(localStorage.getItem("userInfo"))?.token;

// ==========================
// Get All Users
// ==========================
export const getUsers = async () => {

  const res = await axios.get(
    API,
    {
      headers: {
        Authorization: `Bearer ${token()}`
      }
    }
  );

  return res.data;
};

// ==========================
// Update Profile
// ==========================
export const updateProfile = async (data) => {

  const res = await axios.put(

    `${API}/profile`,

    data,

    {
      headers: {
        Authorization: `Bearer ${token()}`
      }
    }

  );

  return res.data;

};

export const getProfile = async () => {

    const res = await axios.get(

        `${API}/profile`,

        {
            headers:{
                Authorization:`Bearer ${token()}`
            }
        }

    );

    return res.data;

};