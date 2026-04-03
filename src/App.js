import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Portfolio projects
  const projects = [
    {
      title: 'Full Stack SLB Integration Platform',
      description: 'Web application integrating multiple SLB services using Angular, .NET 8, and MongoDB',
      tools: 'Angular, .NET 8, MongoDB'
    },
    {
      title: 'WellWatcher Stim Desktop App',
      description: 'Desktop application with 100% faster core algorithm performance',
      tools: 'C++, Python, Azure DevOps'
    },
    {
      title: 'Test Suite Automation System',
      description: 'Automated VMAF score computation for video resolutions',
      tools: 'Java, Jenkins, Kubernetes, FFmpeg'
    },
    {
      title: 'Real-time Data Dashboard',
      description: 'Dynamic website with real-time updates for IT infrastructure',
      tools: 'React, Tableau, REST APIs'
    },
    {
      title: 'Micro-services Web Applications',
      description: 'Six full-stack micro-service applications',
      tools: 'Angular, React, Spring Boot, Oracle/MySQL'
    },
    {
      title: 'Legacy App Modernization',
      description: 'Led team of 5 to modernize 3 legacy applications',
      tools: 'Full-stack, 90% code coverage increase'
    }
  ];

  return (
    <div className="site-root">
      <Navigation />
      <Header />
      <main className="site-content">
        <About />
        <Experience />
        <section id="projects" className="section section-projects">
          <div className="container">
            <h2>Projects</h2>
            <div className="projects-grid">
              {projects.map((p, i) => (
                <article className="project-card" key={i}>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <p className="project-tools">{p.tools}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
