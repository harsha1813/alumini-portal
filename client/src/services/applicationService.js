
import axios from "axios";

const API =
"http://localhost:5000/api/applications";

const token = () =>
JSON.parse(
localStorage.getItem("userInfo")
)?.token;

export const applyJob = async (jobId) => {

  const res = await axios.post(

    `${API}/${jobId}`,

    {},

    {
      headers:{
        Authorization:`Bearer ${token()}`
      }
    }

  );

  return res.data;

};

export const getMyJobs = async () => {

  const res = await axios.get(

    `${API}/my-jobs`,

    {
      headers:{
        Authorization:`Bearer ${token()}`
      }
    }

  );

  return res.data;

};

export const getApplicants = async(jobId)=>{

  const res = await axios.get(

    `${API}/job/${jobId}`,

    {
      headers:{
        Authorization:`Bearer ${token()}`
      }
    }

  );

  return res.data;

};

export const updateStatus = async(id,status)=>{

const res=await axios.put(

`${API}/status/${id}`,

{status},

{
headers:{
Authorization:`Bearer ${token()}`
}
}

);

return res.data;

};

export const getStudentApplications = async () => {

  const res = await axios.get(

    `${API}/student`,

    {
      headers: {
        Authorization: `Bearer ${token()}`
      }
    }

  );

  return res.data;

};

export const deleteApplication = async (id) => {

  const res = await axios.delete(

    `${API}/${id}`,

    {
      headers: {
        Authorization: `Bearer ${token()}`
      }
    }

  );

  return res.data;

};