import React, { useState, useEffect } from 'react';
import './styles/Projects.css';
import config from '../config/config';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${config.API_URL}/projects`);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error al cargar los proyectos:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="projects">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img 
              src={project.imageUrl.startsWith('http') 
                ? project.imageUrl 
                : `/images/02.jpg`} 
              alt={project.title} 
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary"
                >
                  Ver Demo
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-secondary"
                >
                  Ver Código
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
