import axios from "axios";

const API_INSTANCE = axios.create({
  baseURL: "https://7ba9-185-107-80-121.ngrok-free.app",
});
export default API_INSTANCE;
