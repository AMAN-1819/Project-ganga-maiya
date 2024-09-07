import React from 'react';
import Header from './components/Header';
import RealTimeData from './components/RealTimeData';
import Statistics from './components/Statistics';
import Graph from './components/Graph';
import Forecast from './components/Forecast';

function App() {
  return (
    <div className="App">
      <Header />
      <RealTimeData />
      <Statistics />
      <Graph />
      <Forecast />
    </div>
  );
}

export default App;
