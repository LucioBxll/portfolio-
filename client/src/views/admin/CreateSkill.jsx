import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../config/config';

const CreateSkill = () => {
  const navigate = useNavigate();
  const [skill, setSkill] = useState({
    name: '',
    category: 'frontend' // valor por defecto
  });

  const categories = [
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'design', label: 'Diseño' },
    { value: 'tools', label: 'Herramientas' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkill(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${config.API_URL}/skills`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(skill)
      });

      if (response.ok) {
        navigate('/admin/skills');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="admin-form-container">
      <h2>Agregar Nueva Habilidad</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="name">Nombre de la Habilidad</label>
          <input
            type="text"
            id="name"
            name="name"
            value={skill.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Categoría</label>
          <select
            id="category"
            name="category"
            value={skill.category}
            onChange={handleChange}
            className="category-select"
            required
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn-primary">Agregar Habilidad</button>
          <button 
            type="button" 
            className="btn-secondary"
            onClick={() => navigate('/admin/skills')}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateSkill; 