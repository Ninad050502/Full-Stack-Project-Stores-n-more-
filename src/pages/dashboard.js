import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)" }}>
      <div className="card p-5 shadow-lg" style={{ width: "400px", borderRadius: "20px" }}>
        <h2 className="text-center mb-4">Dashboard</h2>
        <p className="text-center">You are now logged in!</p>
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-danger" onClick={() => navigate("/")}>Logout</button>
        </div>
      </div>
    </div>
  );
}
