import React from "react";
import "./layout.css";

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      items: ["Java", "Python", "C/C++", "C#", "JavaScript", "HTML/CSS", "SQL"]
    },
    {
      category: "Technologies",
      items: ["React", "Angular", "Spring Boot", ".NET", "Git", "Docker", "Kubernetes", "Jenkins", "MySQL", "Tableau", "MongoDB"]
    },
    {
      category: "Other",
      items: ["Agile", "Micro-services", "Test Driven Development", "CI/CD", "REST APIs", "Azure DevOps"]
    }
  ];

  return (
    <section id="skills" className="section section-skills" data-animate="section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category" data-animate="card">
              <h4>{cat.category}</h4>
              <div className="skill-tags">
                {cat.items.map((item, i) => (
                  <span key={i} className="skill-tag" data-animate="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
