import React, { useState, useEffect } from 'react';
import config from '../../config/config';
import { useNavigate } from 'react-router-dom';

const AdminSkills = () => {
  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await fetch(`${config.API_URL}/skills/all`);
      const data = await response.json();
      setSkills(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteSkill = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar esta habilidad?')) {
      try {
        await fetch(`${config.API_URL}/skills/${id}`, {
          method: 'DELETE'
        });
        fetchSkills();
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="admin-skills">
      <div className="admin-header">
        <h2>Gestionar Habilidades</h2>
        <button 
          className="btn-primary"
          onClick={() => navigate('/admin/skills/create')}
        >
          Nueva Habilidad
        </button>
      </div>
      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => (
              <tr key={skill._id}>
                <td>{skill.name}</td>
                <td>{skill.category}</td>
                <td>
                  <button 
                    className="btn-edit"
                    onClick={() => navigate(`/admin/skills/edit/${skill._id}`)}
                  >
                    Editar
                  </button>
                  <button 
                    className="btn-delete"
                    onClick={() => deleteSkill(skill._id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminSkills; 