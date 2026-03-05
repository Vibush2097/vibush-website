import React from 'react';
import './layout.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <small>© {new Date().getFullYear()} Vibush Shanmugam — Built with React</small>
      </div>
    </footer>
  );
}