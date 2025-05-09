import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Developers from './pages/Developers';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Ganancia from './pages/Ganancia';
import Pagos from './pages/Pagos';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';
import { ProjectProvider } from './context/ProjectContext';
import { useAuth } from './context/AuthContext';
import "./App.css";

// Componente para rutas protegidas
const ProtectedRoute = ({ children, roles }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/developers" element={<Developers />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route 
        path="/ganancia" 
        element={
          <ProtectedRoute roles={['developer']}>
            <Ganancia />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/pagos" 
        element={
          <ProtectedRoute roles={['client']}>
            <Pagos />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ProjectProvider>
          <div className="app-container">
            <Header />
            <main className="main-content">
              <AppRoutes />
            </main>
            <Footer />
          </div>
        </ProjectProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
