import axios from "axios";

const API_INSTANCE = axios.create({
  baseURL: "https://b006-178-52-79-23.ngrok-free.app",
});
export default API_INSTANCE;
