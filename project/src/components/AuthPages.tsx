import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn, UserPlus, Mail } from "lucide-react";

type Page = "login" | "register" | "forgotPassword";

export default function AuthPages() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<Page>("login");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("isAuthenticated", "true"); // ✅ Store auth state
    navigate("/dashboard"); // ✅ Redirect to Dashboard
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Reset link sent! (Mock function)"); // ✅ Simulate email sending
    setCurrentPage("login"); // ✅ Redirect to login after "sending" the email
  };

  const LoginPage = () => (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <LogIn className="mx-auto h-12 w-12 text-blue-600" />
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleLogin}>
        <div className="space-y-4">
          <input type="email" placeholder="Email address" required className="w-full p-3 border rounded-lg" />
          <input type="password" placeholder="Password" required className="w-full p-3 border rounded-lg" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg">Sign in</button>
      </form>
      <div className="text-center text-sm mt-4">
        <button onClick={() => setCurrentPage("forgotPassword")} className="text-blue-600">Forgot password?</button>
      </div>
      <p className="text-center text-sm">
        Not a member? <button onClick={() => setCurrentPage("register")} className="text-blue-600">Register now</button>
      </p>
    </div>
  );

  const RegisterPage = () => (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <UserPlus className="mx-auto h-12 w-12 text-blue-600" />
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Create your account</h2>
      </div>
      <form className="mt-8 space-y-6">
        <input type="email" placeholder="Email address" required className="w-full p-3 border rounded-lg" />
        <input type="password" placeholder="Password" required className="w-full p-3 border rounded-lg" />
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg">Create account</button>
      </form>
      <p className="text-center text-sm">
        Already have an account? <button onClick={() => setCurrentPage("login")} className="text-blue-600">Sign in</button>
      </p>
    </div>
  );

  const ForgotPasswordPage = () => (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <Mail className="mx-auto h-12 w-12 text-blue-600" />
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Reset Password</h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleForgotPassword}>
        <input type="email" placeholder="Enter your email" required className="w-full p-3 border rounded-lg" />
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg">Send Reset Link</button>
      </form>
      <p className="text-center text-sm">
        Back to <button onClick={() => setCurrentPage("login")} className="text-blue-600">Login</button>
      </p>
    </div>
  );

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        {currentPage === "login" ? <LoginPage /> : currentPage === "register" ? <RegisterPage /> : <ForgotPasswordPage />}
      </div>
    </div>
  );
}
