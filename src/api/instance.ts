import axios from "axios";

const API_INSTANCE = axios.create({
  baseURL: "https://45ec-169-150-196-118.ngrok-free.app",
});
export default API_INSTANCE;
