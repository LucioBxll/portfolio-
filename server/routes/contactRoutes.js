const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// GET - Obtener todos los mensajes
router.get('/contact', async (req, res) => {
  try {
    const messages = await Contact.find({}).sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los mensajes', error });
  }
});

// POST - Crear un nuevo mensaje
router.post('/contact', async (req, res) => {
  try {
    const message = new Contact(req.body);
    const newMessage = await message.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el mensaje', error });
  }
});

// DELETE - Eliminar un mensaje
router.delete('/contact/:id', async (req, res) => {
  try {
    const message = await Contact.findByIdAndDelete(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Mensaje no encontrado' });
    }
    res.json({ message: 'Mensaje eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el mensaje', error });
  }
});

module.exports = router; 