import axios from "axios";

const api = axios.create({
  baseURL: "https://my-app-backend.onrender.com",
  withCredentials: true,   
});

export default api;
