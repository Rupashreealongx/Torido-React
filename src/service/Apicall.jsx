// ✅ Always start with imports
import axios from "axios";

// Optionally: import AppConfig from "../../config"

const API_BASE_URL = "http://127.0.0.1:8000"; 
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export function Signin(payLoad) {
  const formData = new URLSearchParams();
  formData.append("username", payLoad.username);
  formData.append("password", payLoad.password);

  return api.post("/Login/token", formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}
