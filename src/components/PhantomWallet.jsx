import React, { useState, useEffect } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';

const PhantomWallet = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Check if Phantom is installed
    const checkIfWalletIsConnected = async () => {
      try {
        const { solana } = window;
        if (solana && solana.isPhantom) {
          const response = await solana.connect({ onlyIfTrusted: true });
          setWalletAddress(response.publicKey.toString());
          setIsConnected(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async () => {
    try {
      const { solana } = window;
      if (solana && solana.isPhantom) {
        const response = await solana.connect();
        setWalletAddress(response.publicKey.toString());
        setIsConnected(true);
      } else {
        alert('¡Phantom Wallet no está instalada! Por favor, instálala desde https://phantom.app/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const disconnectWallet = async () => {
    try {
      const { solana } = window;
      if (solana) {
        await solana.disconnect();
        setWalletAddress(null);
        setIsConnected(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="phantom-wallet-container">
      <h2>Phantom Wallet Connection</h2>
      {!isConnected ? (
        <button 
          onClick={connectWallet}
          className="connect-wallet-btn"
        >
          Conectar Phantom Wallet
        </button>
      ) : (
        <div className="wallet-info">
          <p>Wallet Conectada:</p>
          <p className="wallet-address">{walletAddress}</p>
          <button 
            onClick={disconnectWallet}
            className="disconnect-wallet-btn"
          >
            Desconectar Wallet
          </button>
        </div>
      )}
    </div>
  );
};

export default PhantomWallet; 