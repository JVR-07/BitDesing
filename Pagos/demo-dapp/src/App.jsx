/*
Demo DApp: Cliente y Trabajador con Phantom Wallet (Solana Devnet)

Estructura del proyecto (Vite + React):

1. Crear proyecto:
   ```bash
   npm create vite@latest demo-dapp -- --template react
   cd demo-dapp
   npm install @solana/web3.js
   ```

2. En `src/App.jsx` sustituir por el siguiente contenido:
*/
import { useEffect, useState } from 'react';
import { Connection, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';

const DEVNET = 'https://api.devnet.solana.com';
const SOL_PRICE_API = 'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd';
const TRANSACTION_FEE = 0.000005; // 5000 lamports (tarifa estándar de Solana)

function App() {
  const [provider, setProvider] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);
  const [project, setProject] = useState({ 
    days: 60, 
    milestones: 2, 
    totalAmount: 1, // Ahora en SOL
    client: '', // Dirección del cliente
    worker: ''  // Dirección del trabajador
  });
  const [errors, setErrors] = useState({});
  const [milestones, setMilestones] = useState([]);
  const [status, setStatus] = useState('');
  const [completedPayments, setCompletedPayments] = useState({}); // Nuevo estado para pagos completados
  const [solPrice, setSolPrice] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  useEffect(() => {
    if (window.solana && window.solana.isPhantom) {
      setProvider(window.solana);
      window.solana.on('connect', () => setWalletAddress(window.solana.publicKey.toString()));
      window.solana.on('disconnect', () => setWalletAddress(null));
    }
    computeMilestones();
    // Obtener precio de SOL
    const fetchSolPrice = async () => {
      try {
        const response = await fetch(SOL_PRICE_API);
        const data = await response.json();
        setSolPrice(data.solana.usd);
      } catch (error) {
        console.error('Error fetching SOL price:', error);
      }
    };
    fetchSolPrice();
    // Actualizar precio cada 5 minutos
    const interval = setInterval(fetchSolPrice, 300000);
    return () => clearInterval(interval);
  }, [project]);

  const connectWallet = async () => {
    try {
      const resp = await provider.connect();
      setWalletAddress(resp.publicKey.toString());
    } catch (err) {
      console.error(err);
    }
  };

  const computeMilestones = () => {
    const { days, milestones: n, totalAmount } = project;
    const interval = Math.floor(days / n);
    const list = Array.from({ length: n }, (_, i) => {
      const due = `${interval * (i + 1)} días`;
      // Calcular el monto base por avance
      const baseAmount = totalAmount / n;
      
      // Si es el último avance, ajustar para asegurar que la suma sea exacta
      const isLastMilestone = i === n - 1;
      const amount = isLastMilestone 
        ? totalAmount - (baseAmount * (n - 1)) // Ajustar el último pago
        : baseAmount;

      return { 
        index: i + 1, 
        due, 
        amount: Number(amount.toFixed(4)) // Redondear a 4 decimales
      };
    });
    setMilestones(list);
  };

  const calculateTotalWithFee = (amount) => {
    return amount + TRANSACTION_FEE;
  };

  const formatAmount = (amount) => {
    const usdAmount = amount * solPrice;
    return {
      sol: amount.toFixed(4),
      usd: usdAmount.toFixed(2)
    };
  };

  const formatAmountDisplay = (amount) => {
    const { sol, usd } = formatAmount(amount);
    return `${sol} SOL ($${usd} USD)`;
  };

  const payMilestone = async (ms) => {
    if (!walletAddress) {
      setStatus('Conecta tu wallet primero');
      return;
    }

    if (!project.client || !project.worker) {
      setStatus('Necesitas configurar las direcciones de cliente y trabajador');
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
      txn.feePayer = provider.publicKey;

      // Determinar el destinatario basado en quién está pagando
      const isClient = walletAddress === project.client;
      const recipient = new PublicKey(isClient ? project.worker : project.client);
      
      // Convertir el monto a lamports (1 SOL = 1e9 lamports)
      const lamports = ms.amount * 1e9;

      // Verificar el balance
      const balance = await connection.getBalance(provider.publicKey);
      if (balance < lamports) {
        setStatus('Balance insuficiente para realizar el pago');
        return;
      }

      // Agregar la instrucción de transferencia
      txn.add(
        SystemProgram.transfer({
          fromPubkey: provider.publicKey,
          toPubkey: recipient,
          lamports: lamports
        })
      );

      // Firmar y enviar la transacción
      const { signature } = await provider.signAndSendTransaction(txn);
      
      // Esperar confirmación
      const confirmation = await connection.confirmTransaction(signature, 'confirmed');
      
      if (confirmation.value.err) {
        throw new Error('Error en la confirmación de la transacción');
      }

      // Marcar el pago como completado
      setCompletedPayments(prev => ({
        ...prev,
        [ms.index]: {
          signature,
          timestamp: new Date().toLocaleString()
        }
      }));

      setStatus(`Pago del avance ${ms.index} confirmado: ${signature}`);
    } catch (err) {
      console.error('Error en el pago:', err);
      setStatus(`Error en el pago: ${err.message}`);
    }
  };

  const calculateProgress = (index) => {
    const totalMilestones = project.milestones;
    return (index / totalMilestones) * 100;
  };

  const validateNumber = (value, field) => {
    const num = Number(value);
    if (isNaN(num) || num < 0) {
      setErrors(prev => ({
        ...prev,
        [field]: 'El valor debe ser un número positivo'
      }));
      return false;
    }
    if (field === 'milestones' && num < 1) {
      setErrors(prev => ({
        ...prev,
        [field]: 'Debe haber al menos 1 avance'
      }));
      return false;
    }
    if (field === 'days' && num < 1) {
      setErrors(prev => ({
        ...prev,
        [field]: 'Los días deben ser al menos 1'
      }));
      return false;
    }
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
    return true;
  };

  const handleNumberChange = (e, field) => {
    const value = e.target.value;
    if (validateNumber(value, field)) {
      setProject(prev => ({ ...prev, [field]: Number(value) }));
    }
  };

  const handlePaymentClick = (ms) => {
    setSelectedMilestone(ms);
    setShowConfirmation(true);
  };

  const handleConfirmPayment = async () => {
    setShowConfirmation(false);
    await payMilestone(selectedMilestone);
  };

  const handleCancelPayment = () => {
    setShowConfirmation(false);
    setSelectedMilestone(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Demo Cliente & Trabajador</h1>
              <p className="text-gray-600">Plataforma de gestión de pagos con Solana</p>
            </div>
            <div className="flex items-center space-x-4">
              {walletAddress ? (
                <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-sm font-medium text-gray-700">
                    Wallet: <span className="text-blue-600">{walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}</span>
                  </p>
                </div>
              ) : (
                <button 
                  onClick={connectWallet} 
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Conectar Phantom</span>
                </button>
              )}
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Parámetros del proyecto</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Días totales</label>
                <input 
                  type="number" 
                  min="1"
                  value={project.days} 
                  onChange={(e) => handleNumberChange(e, 'days')}
                  className={`w-full px-3 py-2 border ${errors.days ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.days && (
                  <p className="mt-1 text-sm text-red-600">{errors.days}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Avances</label>
                <input 
                  type="number" 
                  min="1"
                  value={project.milestones} 
                  onChange={(e) => handleNumberChange(e, 'milestones')}
                  className={`w-full px-3 py-2 border ${errors.milestones ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.milestones && (
                  <p className="mt-1 text-sm text-red-600">{errors.milestones}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Total (SOL)</label>
                <input 
                  type="number" 
                  min="0"
                  step="0.1"
                  value={project.totalAmount} 
                  onChange={(e) => handleNumberChange(e, 'totalAmount')}
                  className={`w-full px-3 py-2 border ${errors.totalAmount ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.totalAmount && (
                  <p className="mt-1 text-sm text-red-600">{errors.totalAmount}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Dirección del Cliente</label>
                <input 
                  type="text" 
                  value={project.client} 
                  onChange={e => setProject(prev => ({ ...prev, client: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Dirección del Trabajador</label>
                <input 
                  type="text" 
                  value={project.worker} 
                  onChange={e => setProject(prev => ({ ...prev, worker: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Cronograma de Avances</h2>
            <div className="space-y-4">
              {milestones.map(ms => (
                <div key={ms.index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-800">Avance {ms.index}</h3>
                    <span className="text-sm text-gray-500">Vence en: {ms.due}</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progreso</span>
                      <span>{calculateProgress(ms.index)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${calculateProgress(ms.index)}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                    <p className="text-lg font-semibold text-blue-600">{formatAmountDisplay(ms.amount)}</p>
                    {ms.index === milestones.length && (
                      <p className="text-sm text-gray-500 mt-1">* Ajustado para completar el pago total</p>
                    )}
                  </div>
                  
                  {completedPayments[ms.index] ? (
                    <div className="bg-green-50 rounded-md p-3 border border-green-100">
                      <div className="flex items-center space-x-2 text-green-700">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">Pago Completado</span>
                      </div>
                      <div className="mt-2 space-y-1">
                        <p className="text-sm text-gray-600">
                          Fecha: {completedPayments[ms.index].timestamp}
                        </p>
                        <a 
                          href={`https://explorer.solana.com/tx/${completedPayments[ms.index].signature}?cluster=devnet`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-800 inline-flex items-center group"
                        >
                          Ver transacción
                          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <button 
                      onClick={() => handlePaymentClick(ms)} 
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-[1.02]"
                      disabled={Object.keys(completedPayments).includes(ms.index.toString())}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Pagar Avance</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Confirmation Dialog */}
        {showConfirmation && selectedMilestone && (
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
                  <p className="font-medium text-gray-800">Avance {selectedMilestone.index}</p>
                  <div className="mt-2">
                    <p className="text-lg font-semibold text-blue-600">
                      {formatAmountDisplay(selectedMilestone.amount)}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Vence en: {selectedMilestone.due}</p>
                </div>

                {/* Transaction Fee Information */}
                <div className="mt-4 bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">Detalles de la Transacción</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Monto del pago:</span>
                      <div className="text-right">
                        <p className="font-medium">{formatAmount(selectedMilestone.amount).sol} SOL</p>
                        <p className="text-gray-500">${formatAmount(selectedMilestone.amount).usd} USD</p>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tarifa Phantom:</span>
                      <div className="text-right">
                        <p className="font-medium">{formatAmount(TRANSACTION_FEE).sol} SOL</p>
                        <p className="text-gray-500">${formatAmount(TRANSACTION_FEE).usd} USD</p>
                      </div>
                    </div>
                    <div className="border-t border-blue-200 my-2"></div>
                    <div className="flex justify-between text-sm font-semibold">
                      <span className="text-blue-800">Total a pagar:</span>
                      <div className="text-right">
                        <p className="text-blue-800">{formatAmount(calculateTotalWithFee(selectedMilestone.amount)).sol} SOL</p>
                        <p className="text-blue-600">${formatAmount(calculateTotalWithFee(selectedMilestone.amount)).usd} USD</p>
                      </div>
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
    </div>
  );
}

export default App;

/*
3. Correr:
   ```bash
   npm run dev
   ```

4. Pruebas con dinero ficticio:
   - En Phantom Wallet, cambiar la red a 'Devnet'.
   - Obtener SOL de un faucet (https://solfaucet.com).
   - Para simular tokens, en lugar de SOL, puedes desplegar un SPL Token de prueba y usarlo. Aquí solo usamos lamports para simplificar.
*/
