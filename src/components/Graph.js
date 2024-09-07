import { Line } from 'react-chartjs-2';
import './Graph.css';

const Graph = () => {
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [
      {
        label: 'Water Quality Index',
        data: [70, 75, 78, 80, 85],
        borderColor: 'rgba(0, 183, 255, 1)',
        backgroundColor: 'rgba(0, 183, 255, 0.2)',
        pointBorderColor: '#fff',
        pointBackgroundColor: 'rgba(0, 183, 255, 1)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0, 183, 255, 1)',
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.4, // Smooth line
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#fff',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#fff',
        },
      },
    },
  };

  return (
    <div className="graph-section">
      <h3 className="graph-title">Water Quality Trend</h3>
      <Line data={data} options={options} className="graph" />
    </div>
  );
};

export default Graph;
