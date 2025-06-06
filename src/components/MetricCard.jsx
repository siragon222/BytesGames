import React from 'react';
import CountUp from 'react-countup';
import './MetricCard.css'; // Importar el archivo CSS

const MetricCard = () => {
  return (
    <div className="metric-card">
      <div className="metric-item">
        <span className="countup-container">
          <CountUp
            start={0}
            end={10000}
            duration={2.5}
            separator=","
            className="countup-number"
          />
        </span>
        <span>Juegos</span>
      </div>
      <div className="metric-item">
        <span className="countup-container">
          <CountUp
            start={0}
            end={500}
            duration={2.5}
            separator=","
            className="countup-number"
          />
        </span>
        <span>Usuarios</span>
      </div>
      <div className="metric-item">
        <span className="countup-container">
          <CountUp
            start={0}
            end={100}
            duration={2.5}
            separator=","
            className="countup-number"
          />
        </span>
        <span>Países</span>
      </div>
    </div>
  );
};

export default MetricCard; 