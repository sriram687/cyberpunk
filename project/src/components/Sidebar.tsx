import { Home, BarChart2, User, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("token"); // ✅ Remove JWT token
    window.dispatchEvent(new Event("authChange")); // ✅ Notify App
    navigate("/"); // ✅ Redirect to Login page
  };
  

  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 shadow-lg">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xl font-bold">RougeNetX</span>
        </div>

        <nav className="space-y-2">
          <Link
            to="/dashboard"
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isActive("/dashboard")
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Home size={20} />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/report"
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isActive("/report")
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <BarChart2 size={20} />
            <span>Report</span>
          </Link>

          <Link
            to="/profile"
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isActive("/profile")
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <User size={20} />
            <span>Profile</span>
          </Link>
        </nav>
      </div>

      {/* Logout Button */}
      <div className="absolute bottom-4 w-full px-4">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 p-3 text-gray-600 hover:bg-gray-100 rounded-lg w-full"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
