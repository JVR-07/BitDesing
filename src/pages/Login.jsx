import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await login(formData.username, formData.password);
      if (result.success) {
        navigate('/');
      } else {
        setError(result.error || 'Error al iniciar sesión');
      }
    } catch (error) {
      setError(error.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
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
      
      const result = await login(resp.publicKey.toString(), signedMessage.signature);
      if (result.success) {
        navigate('/');
      } else {
        setError(result.error || 'Error al iniciar sesión con Phantom');
      }
    } catch (error) {
      setError(error.message || 'Error al conectar con Phantom Wallet');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Iniciar Sesión</h1>
        {error && <div className="error-message">{error}</div>}
        
        <div className="divider"></div>
        <button 
          onClick={handlePhantomLogin} 
          className="phantom-login-btn"
          disabled={loading}
        >
          {loading ? 'Conectando...' : 'Iniciar Sesión con Phantom'}
        </button>
        <p className="register-link">
          ¿No tienes una cuenta? <Link to="https://phantom.com/">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default Login; 