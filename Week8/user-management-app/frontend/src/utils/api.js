import axios from "axios";

const API = axios.create({
  baseURL: "https://userb-n04c.onrender.com/user-api",
  withCredentials: true,
});

export default API;
