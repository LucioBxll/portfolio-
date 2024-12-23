import React, { useState, useEffect } from 'react';
import './styles/About.css';
import config from '../config/config';

const About = () => {
  const [skills, setSkills] = useState({
    frontend: [],
    backend: [],
    design: []
  });

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch(`${config.API_URL}/skills`);
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error('Error al cargar las habilidades:', error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="about">
      <div className="about-content">
        <h2>Desarrollador Web en Formación</h2>
        
        <div className="about-intro">
          <p>
            Hola, soy <span className="highlight">Lucio Boxall</span>, estudiante de desarrollo web 
            en la Escuela Davinci, con experiencia en diversas áreas y tecnologías.
          </p>
        </div>

        <div className="skills-section">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skills-list">
              {skills.frontend.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skills-list">
              {skills.backend.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>Diseño Gráfico</h3>
            <div className="skills-list">
              {skills.design.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="about-description">
          <p>
            Disfruto del desarrollo frontend, donde puedo combinar creatividad y 
            técnica para construir interfaces atractivas. Actualmente trabajo en 
            una empresa de soluciones tecnológicas, ayudando a los clientes a 
            resolver problemas relacionados con hosting y mantenimiento web.
          </p>
          <p>
            Estoy en constante aprendizaje y busco oportunidades para aplicar y 
            potenciar mis habilidades.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
