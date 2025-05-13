import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects') // Change this to your backend URL if deployed
      .then((res) => res.json())
      .then((data) => setProjectData(data))
      .catch((err) => console.error('Error fetching projects:', err));
  }, []);

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
