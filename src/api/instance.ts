import axios from "axios";

const API_INSTANCE = axios.create({
  baseURL: "https://1f0a-178-52-96-180.ngrok-free.app",
});
export default API_INSTANCE;
