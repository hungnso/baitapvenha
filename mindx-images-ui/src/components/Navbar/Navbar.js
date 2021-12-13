import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  const handleCLick = (e) => {
    e.preventDefault();
    navigate("/posts");
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <div>
          <a className="navbar-brand" onClick={handleCLick} href="#">
            MindX Images
          </a>
          <button className="btn btn-link">Login</button>
          <button className="btn btn-link">Signup</button>
        </div>
      </div>
    </nav>
  );
}
