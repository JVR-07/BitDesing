import React from 'react';
import { useAuth } from '../context/AuthContext';

const Pagos = () => {
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Pagos Pendientes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {developersToPay.map((dev) => (
          <div key={dev.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{dev.name}</h2>
                <p className="text-gray-600">{dev.project}</p>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                Pendiente
              </span>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Monto a pagar:</span>
                <span className="font-semibold">${dev.amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Fecha límite:</span>
                <span className="font-semibold">{new Date(dev.dueDate).toLocaleDateString()}</span>
              </div>
            </div>

            <button
              onClick={() => handlePayment(dev.id)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Realizar Pago
            </button>
          </div>
        ))}
      </div>

      {developersToPay.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No hay pagos pendientes en este momento.</p>
        </div>
      )}
    </div>
  );
};

export default Pagos; 