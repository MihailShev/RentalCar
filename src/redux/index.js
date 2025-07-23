import axios from "axios";
import { getEnvVar } from "../utils/getEnvVar";

export const api = axios.create({
  baseURL: getEnvVar("VITE_BACKEND_URL"),
});
