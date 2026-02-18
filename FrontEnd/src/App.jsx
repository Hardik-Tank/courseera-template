import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import MainPage from "./components/MainPage.jsx";

import GiftDetails from "./components/GiftDetails.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import LoginPage from "./components/LoginPage.jsx";

function App() {
  // Simple auth check
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Landing / Main Page */}
        <Route path="/" element={<MainPage />} />

        {/* Register */}
        <Route path="/register" element={<RegisterPage />} />

        {/* Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Gift Details */}
        <Route
          path="/gift/:id"
          element={isAuthenticated ? <GiftDetails /> : <Navigate to="/login" />}
        />

        {/* Invalid Route */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
