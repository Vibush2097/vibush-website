import React from "react";
import "./layout.css";

export default function Experience() {
  const experiences = [
    {
      company: "SLB",
      position: "Full Stack Software Engineer",
      location: "Sugarland, TX",
      period: "June 2023 – Present",
      bullets: [
        "Engineered a web application that integrated multiple SLB services into a unified platform, projected to increase SLB's annual services revenue and streamline operations for Field Engineers, utilizing Angular, .Net8, and MongoDB.",
        "Spearheaded the development of critical features for the WellWatcher Stim desktop application, speeding up the core algorithm by 100% and improving user experience, leveraging C++, Python, and Azure DevOps."
      ]
    },
    {
      company: "Resi Media LLC",
      position: "Software Engineer Intern",
      location: "Plano, TX",
      period: "May 2022 – Aug 2022",
      bullets: [
        "Engineered an innovative test suite to automate the company's trans-coder architecture evaluation, significantly enhancing testing efficiency by automating the computation of VMAF scores for various video resolutions using Java, Jenkins, Kubernetes, and FFmpeg."
      ]
    },
    {
      company: "Cisco Systems",
      position: "Software Engineer II",
      location: "Bangalore, India",
      period: "May 2021 – Jul 2021",
      bullets: [
        "Reconciled Cisco's application inventory, streamlining data for over 4000 apps, which facilitated enhanced data management and operational efficiency.",
        "Developed and launched a dynamic website for real-time data updates, significantly improving data accessibility for Cisco IT senior leadership.",
        "Utilized Tableau to create insightful dashboards, providing high-level analytics that informed strategic decisions and improved IT infrastructure."
      ]
    },
    {
      company: "Cisco Systems",
      position: "Software Engineer",
      location: "Bangalore, India",
      period: "Jul 2019 – Apr 2021",
      bullets: [
        "Developed 6 full-stack micro-service web applications using Angular, React, Spring Boot, Oracle SQL, and MySQL, directly contributing to the expansion of service offerings and customer engagement.",
        "Enhanced a web-app for the customer delivery team, leading to over $1 million in service contract renewals, by optimizing application performance and user experience.",
        "Led a team of 5 developers to modernize 3 legacy applications into a new full-stack application, increasing code coverage by 90%, reducing code footprint by 70%, and successfully decommissioning outdated systems."
      ]
    }
  ];

  return (
    <section id="experience" className="section section-experience" data-animate="section">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-card" data-animate="card">
              <div className="exp-header">
                <h3>{exp.company}</h3>
                <p className="exp-period">{exp.period}</p>
              </div>
              <p className="exp-position">{exp.position}</p>
              <p className="exp-location">{exp.location}</p>
              <ul className="exp-bullets">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
