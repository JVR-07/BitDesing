import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useProjects } from '../context/ProjectContext';
import CreateProjectForm from '../components/CreateProjectForm';
import './Projects.css';

const Projects = () => {
  const { user } = useAuth();
  const { projects, createProject, applyToProject, assignDeveloper } = useProjects();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [applicationMessage, setApplicationMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const sampleProjects = [
    {
      id: 1,
      title: 'Desarrollo de E-commerce',
      description: 'Creación de una plataforma de comercio electrónico con React y Node.js',
      budget: 5000,
      duration: '3 meses',
      status: 'abierto',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
      client: {
        name: 'TechStore',
        email: 'contacto@techstore.com'
      },
      applications: []
    },
    {
      id: 2,
      title: 'Aplicación de Gestión de Tareas',
      description: 'Sistema de gestión de tareas con autenticación y notificaciones',
      budget: 3000,
      duration: '2 meses',
      status: 'en-progreso',
      skills: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      client: {
        name: 'TaskMaster',
        email: 'info@taskmaster.com'
      },
      applications: []
    },
    {
      id: 3,
      title: 'Plataforma de Cursos Online',
      description: 'Desarrollo de una plataforma educativa con sistema de pagos',
      budget: 8000,
      duration: '4 meses',
      status: 'abierto',
      skills: ['React', 'Django', 'PostgreSQL', 'Stripe'],
      client: {
        name: 'EduTech',
        email: 'contacto@edutech.com'
      },
      applications: []
    },
    {
      id: 4,
      title: 'App de Fitness',
      description: 'Aplicación móvil para seguimiento de ejercicios y nutrición',
      budget: 6000,
      duration: '3 meses',
      status: 'completado',
      skills: ['React Native', 'Node.js', 'MongoDB'],
      client: {
        name: 'FitLife',
        email: 'info@fitlife.com'
      },
      applications: []
    },
    {
      id: 5,
      title: 'Sistema de Gestión de Inventario',
      description: 'Software para control de inventario y ventas',
      budget: 4000,
      duration: '2 meses',
      status: 'abierto',
      skills: ['Angular', 'Spring Boot', 'MySQL'],
      client: {
        name: 'InventoryPro',
        email: 'contacto@inventorypro.com'
      },
      applications: []
    }
  ];

  useEffect(() => {
    if (projects.length === 0) {
      sampleProjects.forEach(project => {
        createProject(project);
      });
    }
  }, []);

  const handleCreateProject = async (projectData) => {
    try {
      setLoading(true);
      setError('');
      await createProject({
        ...projectData,
        client: {
          name: user.name,
          email: user.email
        },
        status: 'abierto',
        applications: []
      });
      setShowCreateForm(false);
    } catch (err) {
      setError('Error al crear el proyecto. Por favor, intente nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async (projectId) => {
    if (!applicationMessage.trim()) {
      setError('Por favor, ingrese un mensaje de aplicación.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      await applyToProject(projectId, applicationMessage);
      setApplicationMessage('');
      setSelectedProject(null);
    } catch (err) {
      setError('Error al aplicar al proyecto. Por favor, intente nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleAssignDeveloper = async (projectId, developerId) => {
    try {
      setLoading(true);
      setError('');
      await assignDeveloper(projectId, developerId);
    } catch (err) {
      setError('Error al asignar el desarrollador. Por favor, intente nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Proyectos Disponibles</h1>
      </div>

      {error && <div className="error-message">{error}</div>}

      {user?.role === 'client' && (
        <div className="create-project-section">
          <button
            className="create-project-btn"
            onClick={() => setShowCreateForm(true)}
          >
            <span className="btn-icon">+</span>
            Crear Nuevo Proyecto
          </button>
        </div>
      )}

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h2>{project.title}</h2>
              <span className={`status-badge ${project.status}`}>
                {project.status}
              </span>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-details">
              <div className="detail">
                <span className="label">Presupuesto</span>
                <span className="value">${project.budget}</span>
              </div>
              <div className="detail">
                <span className="label">Duración</span>
                <span className="value">{project.duration}</span>
              </div>
            </div>

            <div className="project-skills">
              {project.skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>

            {user?.role === 'developer' && project.status === 'abierto' && (
              <div className="applications-section">
                <h3>Aplicar al Proyecto</h3>
                <textarea
                  value={applicationMessage}
                  onChange={(e) => setApplicationMessage(e.target.value)}
                  placeholder="Escribe un mensaje explicando por qué quieres trabajar en este proyecto..."
                  rows="3"
                />
                <button
                  className="assign-btn"
                  onClick={() => handleApply(project.id)}
                  disabled={loading}
                >
                  Aplicar
                </button>
              </div>
            )}

            {user?.role === 'client' && project.applications.length > 0 && (
              <div className="applications-section">
                <h3>Aplicaciones ({project.applications.length})</h3>
                {project.applications.map((application) => (
                  <div key={application.id} className="application-card">
                    <div className="application-header">
                      <span className="developer-name">
                        {application.developer.name}
                      </span>
                      <button
                        className="assign-btn"
                        onClick={() => handleAssignDeveloper(project.id, application.developer.id)}
                        disabled={loading}
                      >
                        Asignar
                      </button>
                    </div>
                    <p className="application-message">{application.message}</p>
                  </div>
                ))}
              </div>
            )}

            {project.assignedDeveloper && (
              <div className="assigned-developer">
                <h3>Desarrollador Asignado</h3>
                <p>{project.assignedDeveloper.name}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {showCreateForm && (
        <CreateProjectForm
          onSubmit={handleCreateProject}
          onClose={() => setShowCreateForm(false)}
        />
      )}
    </div>
  );
};

export default Projects; 