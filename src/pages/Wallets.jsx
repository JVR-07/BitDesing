import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Connection, PublicKey } from '@solana/web3.js';
import './Wallets.css';

const DEVNET = 'https://api.devnet.solana.com';

const Wallets = () => {
  const { user } = useAuth();
  const [provider, setProvider] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState(0);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (window.solana && window.solana.isPhantom) {
      setProvider(window.solana);
      // Verificar si ya está conectado
      if (window.solana.isConnected) {
        setWalletAddress(window.solana.publicKey.toString());
        fetchBalance(window.solana.publicKey);
      }
    }
  }, []);

  const connectWallet = async () => {
    try {
      const resp = await provider.connect();
      setWalletAddress(resp.publicKey.toString());
      fetchBalance(resp.publicKey);
      setStatus('Wallet conectada exitosamente');
    } catch (err) {
      console.error(err);
      setStatus('Error al conectar la wallet');
    }
  };

  const fetchBalance = async (publicKey) => {
    try {
      const connection = new Connection(DEVNET, 'confirmed');
      const balance = await connection.getBalance(publicKey);
      setBalance(balance / 1e9); // Convertir lamports a SOL
    } catch (err) {
      console.error('Error al obtener el balance:', err);
      setStatus('Error al obtener el balance');
    }
  };

  return (
    <div className="wallets-container">
      <div className="wallets-header">
        <h1>Gestión de Wallets</h1>
      </div>

      <div className="wallets-content">
        <div className="wallet-card">
          <div className="wallet-header">
            <h2>Wallet Principal</h2>
            {!walletAddress && (
              <button 
                onClick={connectWallet}
                className="connect-btn"
              >
                Conectar Phantom
              </button>
            )}
          </div>

          {walletAddress && (
            <>
              <div className="wallet-details">
                <div className="wallet-detail">
                  <span className="wallet-label">Dirección:</span>
                  <span className="wallet-value">{walletAddress}</span>
                </div>
                <div className="wallet-detail">
                  <span className="wallet-label">Balance:</span>
                  <span className="wallet-value">{balance} SOL</span>
                </div>
              </div>

              <div className="wallet-info">
                <h3>Información de la Wallet</h3>
                <p>Esta wallet se utilizará tanto para:</p>
                <ul>
                  <li>Recibir pagos como desarrollador</li>
                  <li>Realizar pagos como cliente</li>
                </ul>
                <div className="wallet-note">
                  <p>* La misma dirección se utilizará para todas las transacciones en la plataforma</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {status && (
        <div className="status-message">
          <p>{status}</p>
        </div>
      )}
    </div>
  );
};

export default Wallets; 