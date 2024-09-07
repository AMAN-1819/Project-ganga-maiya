import React, { useState, useEffect } from 'react';

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header style={{ backgroundColor: 'lightblue', padding: '20px' }}>
      <h1>Kanpur, UP</h1>
      <h2>Moderate Quality</h2>
      <p>{time.toLocaleDateString()} {time.toLocaleTimeString()}</p>
    </header>
  );
};

export default Header;
