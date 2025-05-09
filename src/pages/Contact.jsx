import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Contact.css';

const Contact = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se implementaría la lógica para enviar el mensaje
    setSuccess(true);
    setFormData({
      subject: '',
      message: ''
    });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contacto</h1>
        <p className="contact-description">
          ¿Tienes alguna pregunta o necesitas ayuda? No dudes en contactarnos.
        </p>

        <div className="contact-info">
          <div className="info-item">
            <h3>Email</h3>
            <p>support@devplatform.com</p>
          </div>
          <div className="info-item">
            <h3>Horario de Atención</h3>
            <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        {user ? (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="subject">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Ingresa el asunto de tu mensaje"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>

            {success && (
              <div className="success-message">
                ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
              </div>
            )}

            <div className="contact-actions">
              <button type="submit" className="submit-button">Enviar Mensaje</button>
            </div>
          </form>
        ) : (
          <div className="login-prompt">
            <p>Para enviar un mensaje, por favor inicia sesión o regístrate.</p>
            <div className="auth-buttons">
              <a href="/login" className="login-button">Iniciar Sesión</a>
              <a href="/register" className="register-button">Registrarse</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact; 