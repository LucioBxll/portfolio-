const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

// GET - Obtener todas las habilidades (agrupadas)
router.get('/skills', async (req, res) => {
  try {
    const skills = await Skill.find({});
    const groupedSkills = {
      frontend: skills.filter(skill => skill.category === 'frontend').map(skill => skill.name),
      backend: skills.filter(skill => skill.category === 'backend').map(skill => skill.name),
      design: [
        ...skills.filter(skill => skill.category === 'design').map(skill => skill.name),
        ...skills.filter(skill => skill.category === 'tools').map(skill => skill.name)
      ]
    };
    res.json(groupedSkills);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las habilidades', error });
  }
});

// GET - Obtener todas las habilidades (sin agrupar)
router.get('/skills/all', async (req, res) => {
  try {
    const skills = await Skill.find({});
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las habilidades', error });
  }
});

// GET - Obtener una habilidad específica
router.get('/skills/:id', async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: 'Habilidad no encontrada' });
    }
    res.json(skill);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la habilidad', error });
  }
});

// POST - Crear una nueva habilidad
router.post('/skills', async (req, res) => {
  try {
    const skill = new Skill(req.body);
    const newSkill = await skill.save();
    res.status(201).json(newSkill);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear la habilidad', error });
  }
});

// PUT - Actualizar una habilidad
router.put('/skills/:id', async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!skill) {
      return res.status(404).json({ message: 'Habilidad no encontrada' });
    }
    res.json(skill);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar la habilidad', error });
  }
});

// DELETE - Eliminar una habilidad
router.delete('/skills/:id', async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: 'Habilidad no encontrada' });
    }
    res.json({ message: 'Habilidad eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la habilidad', error });
  }
});

module.exports = router; 