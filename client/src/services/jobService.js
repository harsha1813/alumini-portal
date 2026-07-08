import axios from "axios";

const API_URL = "http://localhost:5000/api/jobs";

// Get All Jobs
export const getJobs = async (
  search = "",
  company = "",
  location = "",
  sort = "newest",
  page = 1
) => {

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`
    }
  };

  const response = await axios.get(

`${API_URL}?search=${search}&company=${company}&location=${location}&sort=${sort}&page=${page}&limit=5`,

config

  );

  return response.data;
};
// Create Job
export const createJob = async (jobData) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const response = await axios.post(
    API_URL,
    jobData,
    {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "Content-Type": "application/json"
      }
    }
  );

  return response.data;
};
// Update Job
export const updateJob = async (id, jobData) => {
  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`
    }
  };

  const response = await axios.put(
    `${API_URL}/${id}`,
    jobData,
    config
  );

  return response.data;
};

// Delete Job
export const deleteJob = async (id) => {

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`
    }
  };

  const response = await axios.delete(
    `${API_URL}/${id}`,
    config
  );

  return response.data;
};

//Get Job Filters
export const getJobFilters = async () => {

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const config = {

    headers: {
      Authorization:
        `Bearer ${userInfo.token}`
    }

  };

  const response =
    await axios.get(
      `${API_URL}/filters`,
      config
    );

  return response.data;

};

// Get Single Job
export const getJobById = async (id) => {
  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const response = await axios.get(
    `${API_URL}/${id}`,
    config
  );

  return response.data;
};