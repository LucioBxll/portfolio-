import React from 'react';
import './styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contacto</h2>
      <div className="contact-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
