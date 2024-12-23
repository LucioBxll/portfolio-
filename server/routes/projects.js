const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET - Obtener todos los proyectos
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los proyectos', error });
  }
});

// GET - Obtener un proyecto específico
router.get('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el proyecto', error });
  }
});

// POST - Crear un nuevo proyecto
router.post('/projects', async (req, res) => {
  try {
    const project = new Project(req.body);
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el proyecto', error });
  }
});

// PUT - Actualizar un proyecto
router.put('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.json(project);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar el proyecto', error });
  }
});

// DELETE - Eliminar un proyecto
router.delete('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.json({ message: 'Proyecto eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el proyecto', error });
  }
});

module.exports = router; 