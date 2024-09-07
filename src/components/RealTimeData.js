import React, { useEffect, useRef, useState } from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
} from 'chart.js';

// Register necessary Chart.js components
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const RealTimeData = () => {
  const [data, setData] = useState({ ph: 7.6, temp: 24 });
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Placeholder for API call to fetch real-time data
    const fetchData = async () => {
      // Replace with your actual API call
      const response = await fetch('your-api-endpoint');
      const result = await response.json();
      setData({ ph: result.ph, temp: result.temp });
    };

    fetchData();
  }, []);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart
    chartInstance.current = new Chart(ctx, {
      type: 'bar', // Change to the appropriate type if needed
      data: {
        labels: ['pH', 'Temperature'], // Labels for the data
        datasets: [
          {
            label: 'Real-Time Data',
            data: [data.ph, data.temp], // Data from state
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'category'
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Cleanup the chart instance when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]); // Dependency on data to update the chart when data changes

  return (
    <div>
      <h3>Real-Time Data</h3>
      <p>pH: {data.ph}</p>
      <p>Temperature: {data.temp} °C</p>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default RealTimeData;
