import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Connection, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import './Pagos.css';

const DEVNET = 'https://api.devnet.solana.com';
const TRANSACTION_FEE = 0.000005; // 5000 lamports (tarifa estándar de Solana)

const Pagos = () => {
  const { user } = useAuth();
  const [provider, setProvider] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [status, setStatus] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  console.log(walletAddress);
  // Datos de ejemplo - En producción, estos vendrían de tu backend
  const developersToPay = [
    {
      id: 1,
      name: "Juan Pérez",
      project: "E-commerce Platform",
      amount: 0.1,
      dueDate: "2024-03-25",
      status: "pending",
      walletAddress: walletAddress // Reemplazar con la dirección real del desarrollador
    },
    {
      id: 2,
      name: "María García",
      project: "Mobile App Development",
      amount: 0.1,
      dueDate: "2024-03-28",
      status: "pending",
      walletAddress: walletAddress // Reemplazar con la dirección real del desarrollador
    },
    {
      id: 3,
      name: "Carlos López",
      project: "Website Redesign",
      amount: 0.1,
      dueDate: "2024-03-30",
      status: "pending",
      walletAddress: walletAddress // Reemplazar con la dirección real del desarrollador
    }
  ];

  useEffect(() => {
    const checkWallet = async () => {
      if (window.solana && window.solana.isPhantom) {
        setProvider(window.solana);
        try {
          const resp = await window.solana.connect();
          setWalletAddress(resp.publicKey.toString());
        } catch (err) {
          console.error('Error al conectar wallet:', err);
          setStatus('Por favor, conecta tu wallet Phantom');
        }
      } else {
        setStatus('Por favor, instala Phantom Wallet');
      }
    };

    checkWallet();
  }, []);

  const connectWallet = async () => {
    try {
      const resp = await provider.connect();
      setWalletAddress(resp.publicKey.toString());
      setStatus('Wallet conectada exitosamente');
    } catch (err) {
      console.error('Error al conectar wallet:', err);
      setStatus('Error al conectar la wallet');
    }
  };

  const handlePayment = async (developer) => {
    if (!provider) {
      setStatus('Por favor, instala Phantom Wallet');
      return;
    }

    if (!walletAddress) {
      setStatus('Por favor, conecta tu wallet Phantom');
      return;
    }

    try {
      setStatus('Iniciando pago...');
      const connection = new Connection(DEVNET, 'confirmed');
      
      // Obtener el último bloque
      const { blockhash } = await connection.getLatestBlockhash();
      
      // Crear la transacción
      const txn = new Transaction();
      txn.recentBlockhash = blockhash;
      txn.feePayer = new PublicKey(walletAddress);

      // Convertir el monto a lamports (1 SOL = 1e9 lamports)
      const lamports = developer.amount * 1e9;

      // Verificar el balance
      const balance = await connection.getBalance(new PublicKey(walletAddress));
      if (balance < lamports) {
        setStatus('Balance insuficiente para realizar el pago');
        return;
      }

      // Verificar que la dirección del desarrollador sea válida
      let developerPublicKey;
      try {
        developerPublicKey = new PublicKey(developer.walletAddress);
      } catch (err) {
        setStatus('Dirección de wallet del desarrollador inválida');
        return;
      }

      // Agregar la instrucción de transferencia
      txn.add(
        SystemProgram.transfer({
          fromPubkey: new PublicKey(walletAddress),
          toPubkey: developerPublicKey,
          lamports: lamports
        })
      );

      try {
        // Firmar y enviar la transacción
        const { signature } = await provider.signAndSendTransaction(txn);
        
        // Esperar confirmación
        const confirmation = await connection.confirmTransaction(signature, 'confirmed');
        
        if (confirmation.value.err) {
          throw new Error('Error en la confirmación de la transacción');
        }

        setStatus(`Pago confirmado: ${signature}`);
        setShowConfirmation(false);
        setSelectedPayment(null);
      } catch (err) {
        console.error('Error en la transacción:', err);
        setStatus(`Error en la transacción: ${err.message}`);
      }
    } catch (err) {
      console.error('Error en el pago:', err);
      setStatus(`Error en el pago: ${err.message}`);
    }
  };

  const handlePaymentClick = (developer) => {
    if (!walletAddress) {
      setStatus('Por favor, conecta tu wallet Phantom primero');
      return;
    }
    setSelectedPayment(developer);
    setShowConfirmation(true);
  };

  const handleConfirmPayment = async () => {
    if (selectedPayment) {
      await handlePayment(selectedPayment);
    }
  };

  const handleCancelPayment = () => {
    setShowConfirmation(false);
    setSelectedPayment(null);
  };

  return (
    <div className="pagos-container">
      <div className="pagos-header">
        <h1>Pagos Pendientes</h1>
        {!walletAddress && (
          <button 
            onClick={connectWallet}
            className="connect-wallet-btn"
          >
            Conectar Phantom Wallet
          </button>
        )}
      </div>
      
      <div className="pagos-content">
        {developersToPay.map((dev) => (
          <div key={dev.id} className="pago-card">
            <div className="pago-header">
              <div>
                <h2 className="pago-title">{dev.name}</h2>
                <p className="pago-project">{dev.project}</p>
              </div>
              <span className={`pago-status status-${dev.status}`}>
                {dev.status === 'pending' ? 'Pendiente' : 'Completado'}
              </span>
            </div>
            
            <div className="pago-details">
              <div className="pago-detail">
                <span className="pago-label">Monto a pagar:</span>
                <span className="pago-value">{dev.amount} SOL</span>
              </div>
              <div className="pago-detail">
                <span className="pago-label">Fecha límite:</span>
                <span className="pago-value">{new Date(dev.dueDate).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="pago-actions">
              <button
                onClick={() => handlePaymentClick(dev)}
                className="pago-btn pago-btn-primary"
                disabled={!walletAddress}
              >
                Realizar Pago
              </button>
            </div>
          </div>
        ))}
      </div>

      {developersToPay.length === 0 && (
        <div className="pagos-empty">
          <p>No hay pagos pendientes en este momento.</p>
        </div>
      )}

      {/* Confirmation Dialog */}
      {showConfirmation && selectedPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Confirmar Pago</h3>
              <button 
                onClick={handleCancelPayment}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-600 mb-2">¿Estás seguro que deseas realizar el siguiente pago?</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-medium text-gray-800">{selectedPayment.name}</p>
                <div className="mt-2">
                  <p className="text-lg font-semibold text-blue-600">
                    {selectedPayment.amount} SOL
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-1">Proyecto: {selectedPayment.project}</p>
              </div>

              {/* Transaction Fee Information */}
              <div className="mt-4 bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-2">Detalles de la Transacción</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Monto del pago:</span>
                    <span className="font-medium">{selectedPayment.amount} SOL</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tarifa Phantom:</span>
                    <span className="font-medium">{TRANSACTION_FEE} SOL</span>
                  </div>
                  <div className="border-t border-blue-200 my-2"></div>
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="text-blue-800">Total a pagar:</span>
                    <span className="text-blue-800">{selectedPayment.amount + TRANSACTION_FEE} SOL</span>
                  </div>
                </div>
                <p className="text-xs text-blue-600 mt-2">
                  * La tarifa de Phantom es un cargo estándar de la red Solana para procesar la transacción.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleCancelPayment}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmPayment}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Confirmar Pago</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {status && (
        <div className="mt-6 bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
          <p className="text-gray-700">{status}</p>
        </div>
      )}
    </div>
  );
};

export default Pagos; 