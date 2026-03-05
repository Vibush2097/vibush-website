import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './layout.css';

export default function ProjectDetail({ projects = [] }) {
  const { id } = useParams();
  const index = parseInt(id, 10);
  const project = projects[index];

  if (!project) {
    return (
      <div className="section">
        <div className="container">
          <h2>Project not found</h2>
          <p>The project you requested does not exist.</p>
          <Link to="/">Back</Link>
        </div>
      </div>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <h2>{project.title}</h2>
        <p className="lead">{project.details || project.description}</p>
        {project.url && <p><a href={project.url} target="_blank" rel="noreferrer">External link</a></p>}
        <p><Link to="/">Back to home</Link></p>
      </div>
    </section>
  );
}