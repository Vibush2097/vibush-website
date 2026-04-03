import React from "react";
import "./layout.css";

export default function Education() {
  const education = [
    {
      school: "Texas A&M University",
      location: "College Station, Texas",
      degree: "Masters in Computer Science",
      gpa: "4.0",
      period: "Aug 2021 - May 2023",
      logoSrc:
        "https://www.oaoa.com/wp-content/uploads/2024/08/Texas-AM-logo.jpg",
    },
    {
      school: "PES University",
      location: "Bangalore, India",
      degree: "Bachelor of Technology in Computer Science",
      gpa: "3.87",
      period: "Aug 2015 - May 2019",
      logoSrc:
        "https://www.eduopinions.com/wp-content/uploads/2018/10/PESUniversity-logo.jpg",
    }
  ];

  return (
    <section id="education" className="section section-education" data-animate="section">
      <div className="container">
        <h2>Education</h2>
        <div className="education-list">
          {education.map((edu, idx) => (
            <div key={idx} className="education-card" data-animate="card">
              <img
                className="edu-logo"
                src={edu.logoSrc}
                alt={`${edu.school} logo`}
                loading="lazy"
                decoding="async"
              />
              <div className="edu-content">
                <div className="edu-header">
                  <h3 className="edu-school">{edu.school}</h3>
                  <p className="edu-period">{edu.period}</p>
                </div>
                <p className="edu-degree">{edu.degree}</p>
                <p className="edu-location">{edu.location}</p>
                <p className="edu-gpa">GPA: {edu.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
