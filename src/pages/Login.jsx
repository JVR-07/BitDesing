import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showRoleSelection, setShowRoleSelection] = useState(false);
  const [publicKey, setPublicKey] = useState('');
  const [selectedRole, setSelectedRole] = useState('client');

  const handlePhantomLogin = async () => {
    setLoading(true);
    setError('');

    try {
      if (!window.solana || !window.solana.isPhantom) {
        throw new Error('Phantom Wallet no está instalada');
      }

      const resp = await window.solana.connect();
      const message = "Por favor, firma este mensaje para verificar tu identidad";
      const encodedMessage = new TextEncoder().encode(message);
      const signedMessage = await window.solana.signMessage(encodedMessage, "utf8");
      
      setPublicKey(resp.publicKey.toString());
      setShowRoleSelection(true);
    } catch (error) {
      setError(error.message || 'Error al conectar con Phantom Wallet');
    } finally {
      setLoading(false);
    }
  };

  const handleRoleSelection = async () => {
    setLoading(true);
    setError('');

    try {
      // Crear un usuario temporal con la wallet y el rol seleccionado
      const userData = {
        publicKey: publicKey,
        role: selectedRole,
        username: `User_${publicKey.slice(0, 4)}` // Generar un nombre de usuario temporal
      };

      await login(userData);
      navigate('/');
    } catch (error) {
      setError(error.message || 'Error en el proceso de autenticación');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Iniciar Sesión</h1>
        {error && <div className="error-message">{error}</div>}
        
        {!showRoleSelection ? (
          <>
            <div className="divider"></div>
            <button 
              onClick={handlePhantomLogin} 
              className="phantom-login-btn"
              disabled={loading}
            >
              {loading ? 'Conectando...' : 'Iniciar Sesión con Phantom'}
            </button>
          </>
        ) : (
          <div className="role-selection">
            <h2>Selecciona tu rol</h2>
            <div className="role-options">
              <button
                className={`role-btn ${selectedRole === 'client' ? 'selected' : ''}`}
                onClick={() => setSelectedRole('client')}
              >
                Cliente
              </button>
              <button
                className={`role-btn ${selectedRole === 'developer' ? 'selected' : ''}`}
                onClick={() => setSelectedRole('developer')}
              >
                Desarrollador
              </button>
            </div>
            <button 
              onClick={handleRoleSelection}
              className="continue-btn"
              disabled={loading}
            >
              {loading ? 'Procesando...' : 'Continuar'}
            </button>
          </div>
        )}
        
        <p className="register-link">
          ¿No tienes una cuenta? <Link to="https://phantom.app/">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default Login; 