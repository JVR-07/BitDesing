import React from 'react';
import { useAuth } from '../context/AuthContext';
import './Pagos.css';

const Pagos = () => {
  const { user } = useAuth();
  
  // Datos de ejemplo - En producción, estos vendrían de tu backend
  const developersToPay = [
    {
      id: 1,
      name: "Juan Pérez",
      project: "E-commerce Platform",
      amount: 2500,
      dueDate: "2024-03-25",
      status: "pending"
    },
    {
      id: 2,
      name: "María García",
      project: "Mobile App Development",
      amount: 1800,
      dueDate: "2024-03-28",
      status: "pending"
    },
    {
      id: 3,
      name: "Carlos López",
      project: "Website Redesign",
      amount: 3200,
      dueDate: "2024-03-30",
      status: "pending"
    }
  ];

  const handlePayment = (developerId) => {
    // Aquí iría la lógica para procesar el pago
    console.log(`Procesando pago para el desarrollador ${developerId}`);
  };

  return (
    <div className="pagos-container">
      <div className="pagos-header">
        <h1>Pagos Pendientes</h1>
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
                onClick={() => handlePayment(dev.id)}
                className="pago-btn pago-btn-primary"
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
    </div>
  );
};

export default Pagos; 