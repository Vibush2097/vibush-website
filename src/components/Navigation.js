import React, { useState } from "react";
import "./layout.css";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#intro" className="navbar-logo">
          Vibush Shanmugam
        </a>
        <div className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
          <a href="#intro" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Intro
          </a>
          <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            About
          </a>
          <a href="#experience" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Experience
          </a>
          <a href="#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Projects
          </a>
          <a href="#skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Skills
          </a>
          <a href="#education" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Education
          </a>
          <a href="#hobbies" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Hobbies
          </a>
          <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </a>
        </div>
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
