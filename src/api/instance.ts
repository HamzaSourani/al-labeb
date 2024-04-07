import axios from "axios";

const API_INSTANCE = axios.create({
  baseURL: "https://d3f1-178-52-84-212.ngrok-free.app/api",
});
export default API_INSTANCE;
