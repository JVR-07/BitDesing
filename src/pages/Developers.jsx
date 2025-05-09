import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import usersData from '../data/users.json';
import './Developers.css';

const Developers = () => {
  const { user, updateUserAvailability } = useAuth();
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactMessage, setContactMessage] = useState('');

  const developers = usersData.users.filter(user => user.role === 'developer').map(dev => ({
    ...dev,
    availability: dev.availability || 'Disponible',
    experience: dev.experience || '0 años',
    hourlyRate: dev.hourlyRate || '$0',
    completedProjects: dev.completedProjects || 0,
    rating: dev.rating || 0,
    skills: dev.skills || []
  }));

  const handleAvailabilityChange = (availability) => {
    updateUserAvailability(availability);
  };

  const handleContact = (developer) => {
    setSelectedDeveloper(developer);
    setShowContactForm(true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Aquí se implementaría la lógica para enviar el mensaje
    setShowContactForm(false);
    setContactMessage('');
    setSelectedDeveloper(null);
  };

  return (
    <div className="developers-container">
      <div className="developers-header">
        <h1>Desarrolladores</h1>
        {user?.role === 'developer' && (
          <div className="availability-control">
            <span>Estado de disponibilidad:</span>
            <select
              value={user.availability || 'Disponible'}
              onChange={(e) => handleAvailabilityChange(e.target.value)}
              className="availability-select"
            >
              <option value="Disponible">Disponible</option>
              <option value="Ocupado">Ocupado</option>
            </select>
          </div>
        )}
      </div>

      <div className="developers-grid">
        {developers.map(developer => (
          <div key={developer.id} className="developer-card">
            <div className="developer-header">
              <h2>{developer.name}</h2>
              <span className={`availability-badge ${developer.availability.toLowerCase()}`}>
                {developer.availability}
              </span>
            </div>
            <div className="developer-details">
              <div className="detail">
                <span className="label">Experiencia:</span>
                <span className="value">{developer.experience}</span>
              </div>
              <div className="detail">
                <span className="label">Tarifa:</span>
                <span className="value">{developer.hourlyRate}</span>
              </div>
              <div className="detail">
                <span className="label">Proyectos Completados:</span>
                <span className="value">{developer.completedProjects}</span>
              </div>
              <div className="detail">
                <span className="label">Calificación:</span>
                <span className="value">{developer.rating}/5.0</span>
              </div>
            </div>
            <div className="developer-skills">
              {developer.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
            {user?.role === 'client' && (
              <button
                className="contact-button"
                onClick={() => handleContact(developer)}
              >
                Contactar
              </button>
            )}
          </div>
        ))}
      </div>

      {showContactForm && selectedDeveloper && (
        <div className="modal">
          <div className="modal-content">
            <h2>Contactar a {selectedDeveloper.name}</h2>
            <form onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  required
                  rows="4"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-btn">Enviar Mensaje</button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => {
                    setShowContactForm(false);
                    setContactMessage('');
                    setSelectedDeveloper(null);
                  }}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Developers; 