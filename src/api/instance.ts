import axios from "axios";

const API_INSTANCE = axios.create({
  baseURL: "https://5615-178-52-92-200.ngrok-free.app",
});
export default API_INSTANCE;
