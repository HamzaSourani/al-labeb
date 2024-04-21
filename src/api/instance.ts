import axios from "axios";

const API_INSTANCE = axios.create({
  baseURL: "https://3649-178-52-7-115.ngrok-free.app/api",
});
export default API_INSTANCE;
