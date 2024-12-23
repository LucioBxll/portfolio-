import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Projects from './views/Projects';
import About from './views/About';
import Contact from './views/Contact';
import AdminLayout from './views/admin/AdminLayout';
import AdminProjects from './views/admin/AdminProjects';
import AdminSkills from './views/admin/AdminSkills';
import AdminMessages from './views/admin/AdminMessages';
import CreateProject from './views/admin/CreateProject';
import CreateSkill from './views/admin/CreateSkill';
import EditProject from './views/admin/EditProject';
import EditSkill from './views/admin/EditSkill';

// Componente MainLayout para las rutas públicas
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Rutas de administración */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminProjects />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="projects/create" element={<CreateProject />} />
          <Route path="projects/edit/:id" element={<EditProject />} />
          <Route path="skills" element={<AdminSkills />} />
          <Route path="skills/create" element={<CreateSkill />} />
          <Route path="skills/edit/:id" element={<EditSkill />} />
          <Route path="messages" element={<AdminMessages />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 