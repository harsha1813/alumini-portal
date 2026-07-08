import axios from "axios";

const API_URL =
  "http://localhost:5000/api/users/profile";

// Get Profile
export const getProfile = async () => {
  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`
    }
  };

  const response = await axios.get(
    API_URL,
    config
  );

  return response.data;
};

// Update Profile
export const updateProfile = async (
  profileData
) => {
  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`
    }
  };

  const response = await axios.put(
    API_URL,
    profileData,
    config
  );

  return response.data;
};
// Upload Profile Photo
export const uploadProfilePhoto = async (
  imageFile
) => {
  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const formData = new FormData();

  formData.append(
    "image",
    imageFile
  );

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`
    }
  };

  const response = await axios.post(
    "http://localhost:5000/api/users/upload",
    formData,
    config
  );

  return response.data;
};