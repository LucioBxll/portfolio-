import React from 'react';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Bienvenido a mi Portfolio</h1>
        <p className="subtitle">Desarrollador Full Stack</p>
        <div className="cta-buttons">
          <a href="/projects" className="cta-primary">Ver Proyectos</a>
          <a href="/about" className="cta-secondary">Contactar</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
