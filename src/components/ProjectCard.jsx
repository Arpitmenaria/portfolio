import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, techStack, features, link, image }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-img" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {features?.map((feature, idx) => (
            <li key={idx}>✅ {feature}</li>
          ))}
        </ul>
        <p><strong>Tech Stack:</strong> {techStack?.join(', ')}</p>
        <a
          href={link}
          className="view-project-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
