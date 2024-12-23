import React, { useState, useEffect } from 'react';
import config from '../../config/config';
import { useNavigate } from 'react-router-dom';

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(`${config.API_URL}/projects`);
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteProject = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este proyecto?')) {
      try {
        await fetch(`${config.API_URL}/projects/${id}`, {
          method: 'DELETE'
        });
        fetchProjects();
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="admin-projects">
      <div className="admin-header">
        <h2>Gestionar Proyectos</h2>
        <button 
          className="btn-primary"
          onClick={() => navigate('/admin/projects/create')}
        >
          Nuevo Proyecto
        </button>
      </div>
      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Descripción</th>
              <th>Tecnologías</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project._id}>
                <td>{project.title}</td>
                <td>{project.description.substring(0, 50)}...</td>
                <td>{project.technologies.join(', ')}</td>
                <td>
                  <button 
                    className="btn-edit"
                    onClick={() => navigate(`/admin/projects/edit/${project._id}`)}
                  >
                    Editar
                  </button>
                  <button 
                    className="btn-delete"
                    onClick={() => deleteProject(project._id)}
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

export default AdminProjects; 