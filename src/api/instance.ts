import axios from "axios";

const API_INSTANCE = axios.create({
  baseURL: "http://127.0.0.1:5004/api",
});
export default API_INSTANCE;
