import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './PhantomAuth.css';

const PhantomAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login } = useAuth();

  const handlePhantomLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { solana } = window;
      
      if (!solana || !solana.isPhantom) {
        throw new Error('¡Phantom Wallet no está instalada! Por favor, instálala desde https://phantom.app/');
      }

      // Conectar la wallet
      const response = await solana.connect();
      const publicKey = response.publicKey.toString();

      // Generar mensaje para firmar
      const message = "Por favor firma para verificar tu identidad";
      const encodedMessage = new TextEncoder().encode(message);
      
      // Solicitar firma del mensaje
      const signedMessage = await solana.signMessage(encodedMessage, 'utf8');

      // Proceder con el login usando la wallet y la firma
      const loginResult = await login(publicKey, signedMessage.signature);
      
      if (!loginResult.success) {
        throw new Error(loginResult.error || 'Error al iniciar sesión');
      }

    } catch (error) {
      setError(error.message);
      console.error('Error en la autenticación:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="phantom-auth-container">
      <h2>Autenticación con Phantom Wallet</h2>
      <p className="auth-description">
        Conecta tu wallet Phantom y firma un mensaje para verificar tu identidad
      </p>
      
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <button 
        onClick={handlePhantomLogin}
        disabled={isLoading}
        className="phantom-auth-btn"
      >
        {isLoading ? 'Conectando...' : 'Conectar Phantom Wallet'}
      </button>

      <div className="auth-steps">
        <h3>Pasos para autenticarte:</h3>
        <ol>
          <li>Conecta tu wallet Phantom</li>
          <li>Firma el mensaje de verificación</li>
          <li>¡Listo! Tu identidad ha sido verificada</li>
        </ol>
      </div>
    </div>
  );
};

export default PhantomAuth; 