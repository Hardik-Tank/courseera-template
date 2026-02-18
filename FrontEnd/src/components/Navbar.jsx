import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const username = localStorage.getItem("username");

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav>
      <Link to="/">Home</Link>

      {username ? (
        <>
          <span> Welcome, {username} </span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
