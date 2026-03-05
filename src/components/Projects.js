import React from 'react';
import { Link } from 'react-router-dom';
import './layout.css';

export default function Projects({ items = [] }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {items.map((p, i) => (
            <article className="project-card" key={i}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <Link to={`/projects/${i}`} className="view-link">View</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}