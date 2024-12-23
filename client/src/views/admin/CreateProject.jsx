import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../config/config';

const CreateProject = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState({
    title: '',
    description: '',
    imageUrl: '',
    technologies: [],
    githubUrl: '',
    liveUrl: ''
  });
  
  const [availableSkills, setAvailableSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch(`${config.API_URL}/skills/all`);
        const data = await response.json();
        setAvailableSkills(data);
      } catch (error) {
        console.error('Error al cargar habilidades:', error);
      }
    };

    fetchSkills();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedSkills(selectedOptions);
    setProject(prev => ({
      ...prev,
      technologies: selectedOptions
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${config.API_URL}/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project)
      });

      if (response.ok) {
        navigate('/admin/projects');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="admin-form-container">
      <h2>Crear Nuevo Proyecto</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={project.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            value={project.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">URL de la Imagen</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={project.imageUrl}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="technologies">Tecnologías</label>
          <select
            id="technologies"
            name="technologies"
            multiple
            value={selectedSkills}
            onChange={handleSkillChange}
            className="skills-select"
            required
          >
            {availableSkills.map((skill) => (
              <option key={skill._id} value={skill.name}>
                {skill.name} ({skill.category})
              </option>
            ))}
          </select>
          <small className="form-help">
            Mantén presionado Ctrl (Cmd en Mac) para seleccionar múltiples tecnologías
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="githubUrl">URL de GitHub</label>
          <input
            type="url"
            id="githubUrl"
            name="githubUrl"
            value={project.githubUrl}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="liveUrl">URL del Proyecto</label>
          <input
            type="url"
            id="liveUrl"
            name="liveUrl"
            value={project.liveUrl}
            onChange={handleChange}
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn-primary">Crear Proyecto</button>
          <button 
            type="button" 
            className="btn-secondary"
            onClick={() => navigate('/admin/projects')}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject; 