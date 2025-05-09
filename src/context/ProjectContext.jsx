import React, { createContext, useState, useContext, useEffect } from 'react';
import projectsData from '../data/projects.json';
import { useAuth } from './AuthContext';

const ProjectContext = createContext(null);

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(projectsData.projects);
  const { user } = useAuth();

  const createProject = (projectData) => {
    const newProject = {
      id: projects.length + 1,
      ...projectData,
      clientId: user.id,
      clientName: user.name,
      status: 'Abierto',
      applications: []
    };
    setProjects([...projects, newProject]);
  };

  const applyToProject = (projectId, message) => {
    setProjects(projects.map(project => {
      if (project.id === projectId) {
        return {
          ...project,
          applications: [
            ...project.applications,
            {
              developerId: user.id,
              developerName: user.name,
              status: 'Pendiente',
              message
            }
          ]
        };
      }
      return project;
    }));
  };

  const assignDeveloper = (projectId, developerId) => {
    setProjects(projects.map(project => {
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
    }));
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