import axios from "axios";

const userApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true, // important for cookies
  
});

export default userApi;
