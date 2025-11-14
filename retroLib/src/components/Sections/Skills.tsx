import React from "react";
import "./Skills.css";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">JavaScript</div>
        <div className="skill-card">TypeScript</div>
        <div className="skill-card">React</div>
        <div className="skill-card">Node.js</div>
        <div className="skill-card">Python</div>
        <div className="skill-card">MongoDB</div>
      </div>
    </section>
  );
};
