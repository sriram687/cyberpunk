import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const token = localStorage.getItem("token"); // ✅ Get JWT token

  return token ? children : <Navigate to="/" replace />;
}
