import React, { useState, useEffect } from 'react';
import './Countdown.css'; // Import the CSS file

const Countdown = ({ releaseDate, onOfferEnd }) => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [offerEnded, setOfferEnded] = useState(false);
  const [displayEndDate, setDisplayEndDate] = useState('');

  useEffect(() => {
    if (!releaseDate) {
      setTimeLeft(null);
      setOfferEnded(false);
      return;
    }

    const dates = releaseDate.split(',').map(date => date.trim());
    let startDate = null;
    let endDate = null;

    if (dates.length === 2) {
      startDate = new Date(dates[0]);
      endDate = new Date(dates[1]);
      setDisplayEndDate(dates[1]);
    } else if (dates.length === 1) {
      // If only one date is provided, assume it's the end date for a simple countdown
      endDate = new Date(dates[0]);
      setDisplayEndDate(dates[0]);
    } else {
      setTimeLeft(null);
      setOfferEnded(false);
      return;
    }

    if (isNaN(endDate.getTime())) {
      console.error('Invalid end date format:', releaseDate);
      setTimeLeft(null);
      setOfferEnded(false);
      return;
    }

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference <= 0) {
        setOfferEnded(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if (onOfferEnd) {
          onOfferEnd();
        }
        return {};
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (Object.keys(newTimeLeft).length === 0) { // Check if offerEnded was set
        clearInterval(timer);
      } else {
        setTimeLeft(newTimeLeft);
      }
    }, 1000);

    // Initial calculation
    const initialTimeLeft = calculateTimeLeft();
    if (Object.keys(initialTimeLeft).length === 0) {
      setOfferEnded(true);
    } else {
      setTimeLeft(initialTimeLeft);
    }

    return () => clearInterval(timer);
  }, [releaseDate, onOfferEnd]);

  if (!timeLeft && !offerEnded) {
    return null; // Don't render if no valid date or offer not started/ended
  }

  return (
    <div className="countdown-container">
      <h3 className="countdown-title">Oferta válida hasta:</h3>
      {offerEnded ? (
        <p className="offer-ended-message">Oferta finalizada {displayEndDate}</p>
      ) : (
        timeLeft && (
          <div className="countdown-values">
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.days}</span>
              <span className="countdown-label">Días</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="countdown-label">Horas</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="countdown-label">Minutos</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="countdown-label">Segundos</span>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Countdown; 