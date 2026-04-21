import axios from "axios";

const api = axios.create({
  baseURL: "https://ridgeway-backend.onrender.com",
  withCredentials: true,   
});

export default api;
