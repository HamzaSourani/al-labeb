import axios from "axios";

const API_INSTANCE = axios.create({
  baseURL: "https://ecfe-178-52-71-103.ngrok-free.app/api",
});
export default API_INSTANCE;
