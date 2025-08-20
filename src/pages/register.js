import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)" }}>
      <div className="card p-5 shadow-lg" style={{ width: "500px", borderRadius: "20px" }}>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={(e) => { e.preventDefault(); navigate("/dashboard"); }}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required />
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button type="submit" className="btn btn-success">Register</button>
            <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/")}>Back to Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
