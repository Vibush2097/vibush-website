import React from "react";
import "./layout.css";

export default function About() {
  const impacts = [
    {
      label: "Business outcomes",
      points: [
        "Built integrations and customer-facing systems tied to revenue and renewal goals.",
        "Contributed to work that supported over $1M in service contract renewals.",
        "Delivered platforms aimed at growing services revenue and streamlining operations for field engineers.",
      ],
    },
    {
      label: "Performance & reliability",
      points: [
        "Leading a Scrum team of five developers on next-generation software automation for well-site operations, with real-time analysis to support field engineers.",
        "Delivered a 100% speedup on a core desktop algorithm for a critical engineering workflow.",
        "Automated test pipelines that improved quality and reduced manual evaluation for video workloads.",
      ],
    },
    {
      label: "Technical leadership",
      points: [
        "Led a team of five to modernize three legacy applications into a single full-stack product.",
        "Raised code coverage to 90% and reduced codebase footprint by roughly 70% while decommissioning legacy systems.",
      ],
    },
    {
      label: "Scale & breadth",
      points: [
        "Shipped six production microservice applications; reconciled inventory for 4,000+ enterprise applications.",
        "Owned features end-to-end across Angular, React, .NET, cloud, and CI/CD.",
      ],
    },
  ];

  return (
    <section id="about" className="section section-about" data-animate="section">
      <div className="container">
        <h2>About</h2>
        <p className="lead">
          I am a full stack software engineer with 4+ years shipping production web and desktop
          software in energy, media, and enterprise IT. I care about how engineering shows up for
          teams: clearer operations, faster products, and numbers you can stand behind in a
          review or roadmap.
        </p>
        <h3 className="about-impact-heading">Impact at a glance</h3>
        <ul className="about-impact-list">
          {impacts.map((item) => (
            <li key={item.label} data-animate="card">
              <span className="about-impact-label">{item.label}</span>
              <ul className="about-impact-points">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p className="lead about-closing">
          I collaborate closely with stakeholders and other engineers—whether leading a
          modernization effort or pairing on hard performance problems—and I am looking for roles
          where technical depth and team outcomes both matter.
        </p>
      </div>
    </section>
  );
}