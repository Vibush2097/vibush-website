import React from "react";
import "./layout.css";

export default function Education() {
  const education = [
    {
      school: "Texas A&M University",
      location: "College Station, Texas",
      degree: "Masters in Computer Science",
      gpa: "4.0",
      period: "Aug 2021 - May 2023"
    },
    {
      school: "PES University",
      location: "Bangalore, India",
      degree: "Bachelor of Technology in Computer Science",
      gpa: "3.87",
      period: "Aug 2015 - May 2019"
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Education</h2>
        <div className="education-list">
          {education.map((edu, idx) => (
            <div key={idx} className="education-card">
              <div className="edu-header">
                <h3>{edu.school}</h3>
                <p className="edu-period">{edu.period}</p>
              </div>
              <p className="edu-degree">{edu.degree}</p>
              <p className="edu-location">{edu.location}</p>
              <p className="edu-gpa">GPA: {edu.gpa}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
