import React, { useState } from 'react';
import './Statistics.css';

const Statistics = () => {
  // State to track which tab is active
  const [activeTab, setActiveTab] = useState('BOD');

  // Function to handle tab switching
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="stats-section">
      <h3>Water Quality Stats</h3>
      
      {/* Tab headers */}
      <ul className="tabs">
        <li 
          className={activeTab === 'BOD' ? 'active' : ''}
          onClick={() => handleTabClick('BOD')}
        >
          BOD
        </li>
        <li 
          className={activeTab === 'Dissolved Oxygen' ? 'active' : ''}
          onClick={() => handleTabClick('Dissolved Oxygen')}
        >
          Dissolved Oxygen
        </li>
        <li 
          className={activeTab === 'Conductivity' ? 'active' : ''}
          onClick={() => handleTabClick('Conductivity')}
        >
          Conductivity
        </li>
        <li 
          className={activeTab === 'E.coli' ? 'active' : ''}
          onClick={() => handleTabClick('E.coli')}
        >
          E.coli
        </li>
      </ul>

      {/* Content based on active tab */}
      <div className="tab-content">
        {activeTab === 'BOD' && <p><strong>BOD:</strong> 1.5 mg/L</p>}
        {activeTab === 'Dissolved Oxygen' && <p><strong>Dissolved Oxygen:</strong> 7.8 mg/L</p>}
        {activeTab === 'Conductivity' && <p><strong>Conductivity:</strong> 303 μS/cm</p>}
        {activeTab === 'E.coli' && <p><strong>E.coli:</strong> 3300 CFU</p>}
      </div>
    </div>
  );
};

export default Statistics;
