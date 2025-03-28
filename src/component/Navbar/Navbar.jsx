import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/clerk-react";
import "./Navbar.css";
import logo from "../Images/logo.jpg";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true" // ✅ Load login state from storage
  );
  const profileRef = useRef(null);
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/sign") {
    return null;
  }

  const toggleProfileMenu = () => {
    setIsProfileOpen((prev) => !prev);
  };

  const closeProfileMenu = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setIsProfileOpen(false);
    }
  };

  useEffect(() => {
    if (isProfileOpen) {
      document.addEventListener("click", closeProfileMenu);
    } else {
      document.removeEventListener("click", closeProfileMenu);
    }
    return () => {
      document.removeEventListener("click", closeProfileMenu);
    };
  }, [isProfileOpen]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true"); // ✅ Save login state
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); // ✅ Remove login state
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="nav-logo logo" to="/">
          <img src={logo} alt="Website Logo" width="50" height="50" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-bs-toggle="dropdown">
                About Us
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/about">About Us</Link></li>
                <li><Link className="dropdown-item" to="/team">Core Team</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Guide">Guide</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/city">City</Link>
            </li>
          </ul>

          {!isSignedIn ? (
  <div className="d-flex">
    <SignInButton mode="modal" afterSignInUrl="/">
      <button className="btn btn-primary me-2">Login</button>
    </SignInButton>
    <SignUpButton mode="modal" afterSignUpUrl="/">
      <button className="btn btn-secondary">Sign Up</button>
    </SignUpButton>
  </div>
) : (
  <>
    {location.pathname === "/" && (
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search Your City" aria-label="Search" />
        <button className="btn btn-outline-success me-2" type="submit">Search</button>
      </form>
    )}
    <UserButton afterSignOutUrl="/" />
    
  </>
)}</div>
      </div>
    </nav>
  );
};

export default Navbar;
