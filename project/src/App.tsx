import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.tsx';
import Dashboard from './pages/Dashboard';
import Report from './pages/Report';
import Profile from './pages/Profile';
import GraphPage from "./pages/GraphPage";
import AuthPages from "./components/AuthPages";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    const handleAuthChange = () => {
      setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
    };

    window.addEventListener("authChange", handleAuthChange);

    return () => window.removeEventListener("authChange", handleAuthChange);
  }, []);

  const showSidebar = isAuthenticated && location.pathname !== "/";

  return (
    <div className="flex min-h-screen bg-gray-100">
      {showSidebar && <Sidebar />}
      <div className={showSidebar ? "ml-64 flex-1" : "w-full flex-1"}>
        <Routes>
          <Route path="/" element={<AuthPages />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/report" element={<ProtectedRoute><Report /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/graph" element={<ProtectedRoute><GraphPage /></ProtectedRoute>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
