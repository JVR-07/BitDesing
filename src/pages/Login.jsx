import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showRegistration, setShowRegistration] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    username: '',
    role: 'client'
  });
  const [publicKey, setPublicKey] = useState('');

  const handleRegistrationChange = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value
    });
  };

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

      // Intentar login/registro
      const response = await fetch('http://localhost:3000/auth/phantom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          publicKey: resp.publicKey.toString()
        })
      });

      const data = await response.json();

      if (data.needsRegistration) {
        setShowRegistration(true);
      } else if (data.success) {
        await login(data.user);
        navigate('/');
      } else {
        setError(data.message || 'Error en el proceso de autenticación');
      }
    } catch (error) {
      setError(error.message || 'Error al conectar con Phantom Wallet');
    } finally {
      setLoading(false);
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3000/auth/phantom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          publicKey,
          username: registrationData.username,
          role: registrationData.role
        })
      });

      const data = await response.json();

      if (data.success) {
        await login(data.user);
        navigate('/');
      } else {
        setError(data.message || 'Error en el registro');
      }
    } catch (error) {
      setError(error.message || 'Error en el proceso de registro');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Iniciar Sesión</h1>
        {error && <div className="error-message">{error}</div>}
        
        {!showRegistration ? (
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
          <form onSubmit={handleRegistration} className="registration-form">
            <div className="form-group">
              <label htmlFor="username">Nombre de Usuario:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={registrationData.username}
                onChange={handleRegistrationChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Rol:</label>
              <select
                id="role"
                name="role"
                value={registrationData.role}
                onChange={handleRegistrationChange}
                required
              >
                <option value="client">Cliente</option>
                <option value="developer">Desarrollador</option>
              </select>
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Registrando...' : 'Completar Registro'}
            </button>
          </form>
        )}
        
        <p className="register-link">
          ¿No tienes una cuenta? <Link to="https://phantom.com/">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default Login; 