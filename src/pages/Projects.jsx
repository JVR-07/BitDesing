import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useProjects } from '../context/ProjectContext';
import './Projects.css';

const Projects = () => {
  const { user } = useAuth();
  const { 
    projects, 
    createProject, 
    applyToProject, 
    assignDeveloper,
    getClientProjects,
    getDeveloperApplications,
    getDeveloperAssignedProjects 
  } = useProjects();

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    budget: '',
    duration: '',
    skills: ''
  });
  const [applicationMessage, setApplicationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
    const newProject = {
      ...formData,
      skills: formData.skills.split(',').map(skill => skill.trim())
    };
    createProject(newProject);
    setShowCreateForm(false);
    setFormData({
      title: '',
      description: '',
      budget: '',
      duration: '',
      skills: ''
    });
  };

  const handleApply = (e) => {
    e.preventDefault();
    applyToProject(selectedProject.id, applicationMessage);
    setShowApplyForm(false);
    setApplicationMessage('');
    setSelectedProject(null);
  };

  const handleAssignDeveloper = (projectId, developerId) => {
    assignDeveloper(projectId, developerId);
  };

  const renderClientView = () => {
    const clientProjects = getClientProjects();
    return (
      <div className="client-view">
        <div className="projects-header">
          <h1>Mis Proyectos</h1>
          <button 
            className="create-project-btn"
            onClick={() => setShowCreateForm(true)}
          >
            Crear Nuevo Proyecto
          </button>
        </div>

        {showCreateForm && (
          <div className="modal">
            <div className="modal-content">
              <h2>Crear Nuevo Proyecto</h2>
              <form onSubmit={handleCreateProject}>
                <div className="form-group">
                  <label htmlFor="title">Título</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Descripción</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows="4"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Presupuesto</label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    placeholder="Ej: $5,000 - $10,000"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="duration">Duración</label>
                  <input
                    type="text"
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                    placeholder="Ej: 3 meses"
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
                    required
                    placeholder="Ej: React, Node.js, MongoDB"
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="submit-btn">Crear Proyecto</button>
                  <button 
                    type="button" 
                    className="cancel-btn"
                    onClick={() => setShowCreateForm(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="projects-grid">
          {clientProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h2>{project.title}</h2>
                <span className={`status-badge ${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-details">
                <div className="detail">
                  <span className="label">Presupuesto:</span>
                  <span className="value">{project.budget}</span>
                </div>
                <div className="detail">
                  <span className="label">Duración:</span>
                  <span className="value">{project.duration}</span>
                </div>
              </div>
              <div className="project-skills">
                {project.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>

              {project.applications && project.applications.length > 0 && (
                <div className="applications-section">
                  <h3>Aplicaciones ({project.applications.length})</h3>
                  {project.applications.map((application, index) => (
                    <div key={index} className="application-card">
                      <div className="application-header">
                        <span className="developer-name">{application.developerName}</span>
                        <span className={`status-badge ${application.status.toLowerCase()}`}>
                          {application.status}
                        </span>
                      </div>
                      <p className="application-message">{application.message}</p>
                      {application.status === 'Pendiente' && (
                        <button
                          className="assign-btn"
                          onClick={() => handleAssignDeveloper(project.id, application.developerId)}
                        >
                          Asignar Desarrollador
                        </button>
                      )}
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
      </div>
    );
  };

  const renderDeveloperView = () => {
    const appliedProjects = getDeveloperApplications();
    const assignedProjects = getDeveloperAssignedProjects();
    const availableProjects = projects.filter(project => 
      project.status === 'Abierto' && 
      !project.applications?.some(app => app.developerId === user?.id)
    );

    return (
      <div className="developer-view">
        <div className="projects-header">
          <h1>Proyectos</h1>
        </div>

        {showApplyForm && selectedProject && (
          <div className="modal">
            <div className="modal-content">
              <h2>Aplicar a Proyecto</h2>
              <form onSubmit={handleApply}>
                <div className="form-group">
                  <label htmlFor="message">Mensaje de Aplicación</label>
                  <textarea
                    id="message"
                    value={applicationMessage}
                    onChange={(e) => setApplicationMessage(e.target.value)}
                    required
                    rows="4"
                    placeholder="Explica por qué eres el candidato ideal para este proyecto..."
                  />
                </div>
                <div className="form-actions">
                  <button type="submit" className="submit-btn">Enviar Aplicación</button>
                  <button 
                    type="button" 
                    className="cancel-btn"
                    onClick={() => {
                      setShowApplyForm(false);
                      setSelectedProject(null);
                    }}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="projects-sections">
          <section className="available-projects">
            <h2>Proyectos Disponibles</h2>
            <div className="projects-grid">
              {availableProjects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-header">
                    <h2>{project.title}</h2>
                    <span className={`status-badge ${project.status.toLowerCase()}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-details">
                    <div className="detail">
                      <span className="label">Presupuesto:</span>
                      <span className="value">{project.budget}</span>
                    </div>
                    <div className="detail">
                      <span className="label">Duración:</span>
                      <span className="value">{project.duration}</span>
                    </div>
                  </div>
                  <div className="project-skills">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  <button 
                    className="apply-button"
                    onClick={() => {
                      setSelectedProject(project);
                      setShowApplyForm(true);
                    }}
                  >
                    Aplicar al Proyecto
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="my-applications">
            <h2>Mis Aplicaciones</h2>
            <div className="projects-grid">
              {appliedProjects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-header">
                    <h2>{project.title}</h2>
                    <span className={`status-badge ${project.status.toLowerCase()}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="application-status">
                    <h3>Estado de la Aplicación</h3>
                    <p>
                      {project.applications.find(app => app.developerId === user?.id)?.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="assigned-projects">
            <h2>Proyectos Asignados</h2>
            <div className="projects-grid">
              {assignedProjects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-header">
                    <h2>{project.title}</h2>
                    <span className={`status-badge ${project.status.toLowerCase()}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-details">
                    <div className="detail">
                      <span className="label">Presupuesto:</span>
                      <span className="value">{project.budget}</span>
                    </div>
                    <div className="detail">
                      <span className="label">Duración:</span>
                      <span className="value">{project.duration}</span>
                    </div>
                  </div>
                  <div className="project-skills">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  };

  const renderPublicView = () => {
    return (
      <div className="public-view">
        <div className="projects-header">
          <h1>Proyectos Disponibles</h1>
        </div>
        <div className="projects-grid">
          {projects.filter(project => project.status === 'Abierto').map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h2>{project.title}</h2>
                <span className={`status-badge ${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-details">
                <div className="detail">
                  <span className="label">Presupuesto:</span>
                  <span className="value">{project.budget}</span>
                </div>
                <div className="detail">
                  <span className="label">Duración:</span>
                  <span className="value">{project.duration}</span>
                </div>
              </div>
              <div className="project-skills">
                {project.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="projects-container">
      {user ? (
        user.role === 'client' ? renderClientView() : renderDeveloperView()
      ) : (
        renderPublicView()
      )}
    </div>
  );
};

export default Projects; 