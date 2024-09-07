import React from 'react';
import Header from './components/Header';
import RealTimeData from './components/RealTimeData';
import Statistics from './components/Statistics';
import Graph from './components/Graph';
import Forecast from './components/Forecast';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="dashboard-container">
      <RealTimeData />
      <Statistics />
    </div>
    <div className="dashboard-container">
      <Graph />
      <Forecast />
      </div>
    </div>
  );
}

export default App;
