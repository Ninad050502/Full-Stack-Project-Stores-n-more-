import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)" }}>
      <div className="card p-5 shadow-lg" style={{ width: "400px", borderRadius: "20px" }}>
        <h2 className="text-center mb-4">Stores n More</h2>
        <form onSubmit={(e) => { e.preventDefault(); navigate("/dashboard"); }}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required />
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button type="submit" className="btn btn-primary">Login</button>
            <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/register")}>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
