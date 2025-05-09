import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

const ProjectContext = createContext(null);

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    // Inicializar con algunos proyectos de ejemplo si no hay ninguno
    if (projects.length === 0) {
      setProjects([
        {
          id: 1,
          title: 'Proyecto de Ejemplo',
          description: 'Este es un proyecto de ejemplo',
          amount: 10,
          status: 'Abierto',
          clientId: '1',
          clientName: 'Cliente Ejemplo',
          budget: '10 SOL',
          duration: '1 mes',
          skills: ['React', 'Node.js'],
          applications: []
        }
      ]);
    }
  }, []);

  const createProject = (projectData) => {
    const newProject = {
      id: Date.now(),
      ...projectData,
      clientId: user?.id,
      clientName: user?.name,
      status: 'Abierto',
      applications: [],
      created_at: new Date().toISOString()
    };
    
    setProjects(prevProjects => [...prevProjects, newProject]);
    return newProject;
  };

  const applyToProject = (projectId, message) => {
    setProjects(prevProjects => 
      prevProjects.map(project => {
        if (project.id === projectId) {
          return {
            ...project,
            applications: [
              ...project.applications,
              {
                developerId: user?.id,
                developerName: user?.name,
                status: 'Pendiente',
                message
              }
            ]
          };
        }
        return project;
      })
    );
  };

  const assignDeveloper = (projectId, developerId) => {
    setProjects(prevProjects => 
      prevProjects.map(project => {
        if (project.id === projectId) {
          const developer = project.applications.find(app => app.developerId === developerId);
          return {
            ...project,
            status: 'En Progreso',
            assignedDeveloper: {
              id: developer.developerId,
              name: developer.developerName
            }
          };
        }
        return project;
      })
    );
  };

  const getClientProjects = () => {
    return projects.filter(project => project.clientId === user?.id);
  };

  const getDeveloperApplications = () => {
    return projects.filter(project => 
      project.applications?.some(app => app.developerId === user?.id)
    );
  };

  const getDeveloperAssignedProjects = () => {
    return projects.filter(project => 
      project.assignedDeveloper?.id === user?.id
    );
  };

  return (
    <ProjectContext.Provider value={{
      projects,
      createProject,
      applyToProject,
      assignDeveloper,
      getClientProjects,
      getDeveloperApplications,
      getDeveloperAssignedProjects
    }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
}; 