import React, { useState, useEffect } from 'react';
import './Header.css'; // External CSS

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header-section">
      <div className="header-content">
        <div className="water-effect">
          <h1 className="location">Kanpur, UP</h1>
        </div>
        <div className="water-effect">
          <h2 className="quality">Moderate Quality</h2>
        </div>
        <div className="water-effect water-clock">
          <p className="header-time">
            {time.toLocaleDateString()} <br />
            {time.toLocaleTimeString()}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
