import React from "react";
import "./layout.css";

export default function Contact() {
  return (
    <section id="contact" className="section section-contact contact" data-animate="section">
      <div className="container">
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:vibushks@gmail.com">vibushks@gmail.com</a>
        </p>
        <p>Phone: 979-985-8020</p>
        <p>
          <a
            href="https://linkedin.com/in/vibush-shanmugam"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          •{" "}
          <a
            href="https://github.com/Vibush2097"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}