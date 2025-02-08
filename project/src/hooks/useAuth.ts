import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080";

export default function useAuth() {
  const [auth, setAuth] = useState(() => localStorage.getItem("token"));

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      localStorage.setItem("token", response.data.token);
      setAuth(response.data.token);
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth(null);
  };

  return { auth, login, logout };
}
