import axios from "axios";

const api = axios.create({
  baseURL: "https://my-app-backend.onrender.com"|| "http://localhost:3000/",
  withCredentials: true,   
});

export default api;
