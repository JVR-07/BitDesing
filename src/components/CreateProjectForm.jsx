import React, { useState } from 'react';
import './CreateProjectForm.css';

const CreateProjectForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    budget: '',
    duration: '',
    skills: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validación básica
    if (!formData.title || !formData.description || !formData.budget) {
      setError('Por favor completa todos los campos requeridos');
      return;
    }

    // Convertir el presupuesto a número y las habilidades a array
    const projectData = {
      ...formData,
      budget: parseFloat(formData.budget),
      skills: formData.skills.split(',').map(skill => skill.trim()).filter(Boolean)
    };

    onSubmit(projectData);
  };

  return (
    <div className="create-project-modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Crear Nuevo Proyecto</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <form className="project-form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="title">Título del Proyecto *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Ingresa el título del proyecto"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe el proyecto en detalle"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="budget">Presupuesto (USD) *</label>
            <input
              type="number"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Ingresa el presupuesto en USD"
              min="0"
              step="0.01"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="duration">Duración Estimada</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Ej: 2 semanas, 1 mes, etc."
            />
          </div>

          <div className="form-group">
            <label htmlFor="skills">Habilidades Requeridas</label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Separa las habilidades con comas"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="submit-button">
              Crear Proyecto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProjectForm; 