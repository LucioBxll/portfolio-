import React from 'react';
import { Outlet, Navigate, Link } from 'react-router-dom';
import '../styles/Admin.css';

const AdminLayout = () => {
  // Aquí puedes agregar lógica de autenticación
  const isAuthenticated = true; // Temporalmente true, después implementaremos la autenticación

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="admin-layout">
      <nav className="admin-sidebar">
        <div className="sidebar-content">
          <div className="admin-header">
            <h2>Panel Admin</h2>
          </div>
          <ul className="admin-menu">
            <li><Link to="/admin/projects">Proyectos</Link></li>
            <li><Link to="/admin/skills">Habilidades</Link></li>
            <li><Link to="/admin/messages">Mensajes</Link></li>
          </ul>
        </div>
        <div className="sidebar-footer">
          <Link to="/" className="btn-home">
            <i className="fas fa-home"></i> Volver al Inicio
          </Link>
        </div>
      </nav>
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout; 