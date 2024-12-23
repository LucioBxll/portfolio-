import React, { useState, useEffect } from 'react';
import config from '../../config/config';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch(`${config.API_URL}/contact`);
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteMessage = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este mensaje?')) {
      try {
        await fetch(`${config.API_URL}/contact/${id}`, {
          method: 'DELETE'
        });
        fetchMessages();
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="admin-messages">
      <div className="admin-header">
        <h2>Mensajes de Contacto</h2>
      </div>
      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Mensaje</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message._id}>
                <td>{message.name}</td>
                <td>{message.email}</td>
                <td>{message.message.substring(0, 50)}...</td>
                <td>{new Date(message.createdAt).toLocaleDateString()}</td>
                <td>
                  <button 
                    className="btn-delete"
                    onClick={() => deleteMessage(message._id)}
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

export default AdminMessages; 