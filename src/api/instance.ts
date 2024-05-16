import { baseURL } from "@/constants/domain";
import axios from "axios";

const API_INSTANCE = axios.create({
  baseURL,
});
export default API_INSTANCE;
