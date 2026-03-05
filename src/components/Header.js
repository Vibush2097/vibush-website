import React from "react";
import "./layout.css";
import portfolioImage from "../assets/images/portfolio-image.jpg"

export default function Header() {
  return (
    <section id="intro" className="hero">
      <div className="container">
        <div className="hero-content">
          <img
            src={portfolioImage}
            alt="Vibush Shanmugam"
            className="hero-portrait"
          />
          <h1>Hi, I'm Vibush Shanmugam.</h1>
          <p className="hero-subtitle">
            Full Stack Software Engineer
          </p>
          <p className="hero-description">
            Self-driven, quick starter, passionate engineer with 4+ years of experience in building scalable web applications and cloud solutions.
          </p>
          <div className="hero-links">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="https://github.com/Vibush2097" target="_blank" rel="noreferrer" className="btn btn-secondary">View My GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}