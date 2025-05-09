import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h2>Conectamos Talento con Oportunidades</h2>
        <p>
          La plataforma líder que une a desarrolladores independientes con proyectos innovadores
          utilizando tecnología blockchain para garantizar transacciones seguras.
        </p>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Contratos Inteligentes</h3>
          <p>Garantizamos pagos seguros y transparentes a través de smart contracts en blockchain.</p>
        </div>
        <div className="feature-card">
          <h3>Talento Verificado</h3>
          <p>Desarrolladores verificados y evaluados para asegurar la calidad del trabajo.</p>
        </div>
        <div className="feature-card">
          <h3>Pagos Seguros</h3>
          <p>Sistema de depósito en garantía para proteger tanto a clientes como desarrolladores.</p>
        </div>
      </section>
    </div>
  );
};

export default Home; 