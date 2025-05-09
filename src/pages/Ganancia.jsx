import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useAuth } from '../context/AuthContext';
import './Ganancia.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Ganancia = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [walletData, setWalletData] = useState({
    balance: 0,
    address: '',
    transactions: []
  });
  const [chartData, setChartData] = useState(null);

  // Función para validar la dirección de la wallet
  const isValidSolanaAddress = (address) => {
    try {
      new PublicKey(address);
      return true;
    } catch (error) {
      return false;
    }
  };

  // Función para calcular el balance acumulado por hora
  const calculateBalanceHistory = (transactions) => {
    // Ordenar transacciones por timestamp
    const sortedTransactions = [...transactions].sort((a, b) => a.timestamp - b.timestamp);
    
    // Crear un mapa para almacenar el balance por hora
    const balanceByHour = new Map();
    let currentBalance = 0;

    // Agrupar transacciones por hora y calcular balance acumulado
    sortedTransactions.forEach(tx => {
      const date = new Date(tx.timestamp);
      const hourKey = `${date.getHours()}:00`;
      
      currentBalance += tx.amount / LAMPORTS_PER_SOL;
      balanceByHour.set(hourKey, currentBalance);
    });

    // Convertir el mapa a un array ordenado
    return Array.from(balanceByHour.entries())
      .map(([hour, balance]) => ({
        hour,
        balance
      }))
      .sort((a, b) => parseInt(a.hour) - parseInt(b.hour));
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Historial de Balance de la Wallet',
        font: {
          size: 16
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `Balance: ${context.parsed.y.toFixed(4)} SOL`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'SOL',
          font: {
            size: 14
          }
        },
        ticks: {
          callback: function(value) {
            return value.toFixed(2) + ' SOL';
          }
        }
      },
      x: {
        title: {
          display: true,
          text: 'Hora',
          font: {
            size: 14
          }
        }
      }
    }
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      setError(null);

      if (!user) {
        setError('No hay usuario autenticado');
        setLoading(false);
        return;
      }

      if (!user.walletAddress) {
        setError('No se encontró la dirección de la wallet. Por favor, configura tu wallet en tu perfil.');
        setLoading(false);
        return;
      }

      // Validar la dirección de la wallet
      if (!isValidSolanaAddress(user.walletAddress)) {
        setError('La dirección de la wallet no es válida. Por favor, verifica la dirección en tu perfil.');
        setLoading(false);
        return;
      }

      try {
        // Conectar a devnet
        const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
        const publicKey = new PublicKey(user.walletAddress);

        // Obtener el balance actual
        const balance = await connection.getBalance(publicKey);
        setWalletData({
          address: user.walletAddress,
          balance: balance / LAMPORTS_PER_SOL
        });

        // Obtener las últimas transacciones
        const signatures = await connection.getSignaturesForAddress(publicKey, { limit: 100 });
        
        if (signatures.length === 0) {
          setError('No se encontraron transacciones para esta wallet');
          setLoading(false);
          return;
        }

        // Obtener detalles de cada transacción
        const transactionDetails = await Promise.all(
          signatures.map(async (sig) => {
            try {
              const tx = await connection.getTransaction(sig.signature);
              if (!tx) return null;

              // Verificar que la transacción pertenece a la wallet registrada
              const accountKeys = tx.transaction.message.accountKeys;
              const isWalletTransaction = accountKeys.some(key => 
                key.toBase58() === user.walletAddress
              );

              if (!isWalletTransaction) return null;

              // Calcular el cambio en el balance
              const preBalance = tx.meta.preBalances[0];
              const postBalance = tx.meta.postBalances[0];
              const amount = postBalance - preBalance;

              return {
                signature: sig.signature,
                timestamp: new Date(tx.blockTime * 1000),
                amount: amount,
                type: amount > 0 ? 'ingreso' : 'egreso'
              };
            } catch (err) {
              console.error('Error al obtener transacción:', err);
              return null;
            }
          })
        );

        // Filtrar transacciones nulas
        const validTransactions = transactionDetails
          .filter(tx => tx !== null)
          .sort((a, b) => a.timestamp - b.timestamp);

        setWalletData({
          ...walletData,
          transactions: validTransactions
        });

        // Preparar datos para el gráfico
        const balanceHistory = calculateBalanceHistory(validTransactions);
        setChartData({
          labels: balanceHistory.map(data => data.hour),
          datasets: [
            {
              label: 'Balance de la Wallet (SOL)',
              data: balanceHistory.map(data => data.balance),
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              tension: 0.4,
              fill: true,
              pointRadius: 4,
              pointHoverRadius: 6,
            }
          ],
        });

      } catch (err) {
        console.error('Error completo:', err);
        setError('Error al cargar las transacciones: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [user]);

  if (loading) {
    return <div className="loading-message">Cargando información de la wallet...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="ganancia-container">
      <div className="ganancia-header">
        <h1>Mi Wallet</h1>
      </div>

      <div className="wallet-info">
        <h2>Balance Actual</h2>
        <div className="wallet-address">{walletData.address}</div>
        <div className="wallet-balance">${walletData.balance.toFixed(2)}</div>
      </div>

      <div className="balance-summary">
        <div className="balance-card">
          <h3>Ingresos Totales</h3>
          <div className="balance-value positive">
            ${walletData.transactions
              .filter(t => t.type === 'ingreso')
              .reduce((sum, t) => sum + t.amount, 0)
              .toFixed(2)}
          </div>
        </div>
        <div className="balance-card">
          <h3>Egresos Totales</h3>
          <div className="balance-value negative">
            ${Math.abs(walletData.transactions
              .filter(t => t.type === 'egreso')
              .reduce((sum, t) => sum + t.amount, 0))
              .toFixed(2)}
          </div>
        </div>
      </div>

      <div className="transactions-list">
        <h2>Últimas Transacciones</h2>
        {walletData.transactions.map(transaction => (
          <div key={transaction.signature} className="transaction-item">
            <div className="transaction-info">
              <div className="transaction-amount">
                ${Math.abs(transaction.amount).toFixed(2)}
              </div>
              <div className="transaction-date">{transaction.timestamp.toLocaleString()}</div>
            </div>
            <div className={`transaction-type type-${transaction.type}`}>
              {transaction.type === 'ingreso' ? 'Ingreso' : 'Egreso'}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div style={{ height: '400px' }}>
          {chartData ? (
            <Line options={options} data={chartData} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">No hay datos para mostrar</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ganancia; 