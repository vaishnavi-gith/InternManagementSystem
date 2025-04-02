import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CredentialData from "./CredentialData"; // ✅ Import credentials

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Find matching user credentials
    const user = CredentialData.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      alert(`Login successful as ${user.role}`);

      // Redirect based on role
      if (user.role === "HR") {
        navigate("/hr-dashboard");
      } else if (user.role === "PMO") {
        navigate("/admin-dashboard");
      } else if (user.role === "Intern") {
        navigate("/intern-dashboard");
      } else {
        setError("Unauthorized Role!");
      }
    } else {
      setError("Invalid Username or Password!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full bg-gray-300 text-black py-2 rounded hover:bg-gray-400 transition"
          >
            Go Back
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;