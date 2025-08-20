import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  // Active section state
  const [activeSection, setActiveSection] = useState("dashboard");

  // Mock data for stores and users
  const [stores] = useState([
    { name: "Store One", email: "store1@mail.com", address: "123 Main St", rating: 4.5 },
    { name: "Store Two", email: "store2@mail.com", address: "456 Oak Ave", rating: 3.8 },
  ]);

  const [users] = useState([
    { name: "Alice", email: "alice@mail.com", address: "NY", role: "Admin" },
    { name: "Bob", email: "bob@mail.com", address: "LA", role: "Normal User" },
    { name: "Charlie", email: "charlie@mail.com", address: "Chicago", role: "Store Owner", rating: 4.2 },
  ]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #000000ff 0%, #20263eff 100%)",
        color: "white",
      }}
    >
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Admin Dashboard
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={() => setActiveSection("dashboard")}
                >
                  Dashboard
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={() => setActiveSection("addUser")}
                >
                  Add New User
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={() => setActiveSection("stores")}
                >
                  View Stores
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={() => setActiveSection("users")}
                >
                  View Users
                </button>
              </li>
            </ul>
            <button className="btn btn-danger" onClick={() => navigate("/")}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container my-5">
        {/* Dashboard Stats */}
        {activeSection === "dashboard" && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "80vh" }}
          >
            <div className="row text-center g-4 w-100">
              <div className="col-md-4">
                <div className="card shadow-lg border border-light bg-primary text-white">
                  <div className="card-body py-5">
                    <h2 className="display-3 fw-bold">120</h2>
                    <p className="lead fs-4">Total Users</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-lg border border-light bg-success text-white">
                  <div className="card-body py-5">
                    <h2 className="display-3 fw-bold">45</h2>
                    <p className="lead fs-4">Total Stores</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-lg border border-dark bg-warning text-dark">
                  <div className="card-body py-5">
                    <h2 className="display-3 fw-bold">325</h2>
                    <p className="lead fs-4">Total Ratings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add New User Form */}
        {activeSection === "addUser" && (
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h3 className="mb-3">Add New User</h3>
              <form className="row g-3 bg-dark p-4 rounded shadow">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="col-md-6">
                  <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Address" />
                </div>
                <div className="col-md-6">
                  <select className="form-select">
                    <option value="">Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Normal User">Normal User</option>
                    <option value="Store Owner">Store Owner</option>
                  </select>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-success">
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Stores Table */}
        {activeSection === "stores" && (
          <div className="row">
            <div className="col-12">
              <h3 className="mb-3">Stores</h3>
              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {stores.map((store, idx) => (
                    <tr key={idx}>
                      <td>{store.name}</td>
                      <td>{store.email}</td>
                      <td>{store.address}</td>
                      <td>{store.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Users Table */}
        {activeSection === "users" && (
          <div className="row">
            <div className="col-12">
              <h3 className="mb-3">Users</h3>
              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Role</th>
                    <th>Rating (if Store Owner)</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, idx) => (
                    <tr key={idx}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.address}</td>
                      <td>{user.role}</td>
                      <td>{user.role === "Store Owner" ? user.rating : "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
