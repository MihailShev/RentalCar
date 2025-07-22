import axios from "axios";
import { getEnvVar } from "../utils/getEnvVar";

export const api = axios.create({
  baseURL: getEnvVar("BACKEND_URL"),
  withCredentials: true,
});
