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
import './RealTimeData.css';

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

    // Create a gradient for 3D effect
    const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient1.addColorStop(0, '#ff6384');
    gradient1.addColorStop(1, '#36a2eb');

    const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient2.addColorStop(0, '#4bc0c0');
    gradient2.addColorStop(1, '#ffce56');

    // Create a new chart
    chartInstance.current = new Chart(ctx, {
      type: 'bar', // Bar chart for real-time data
      data: {
        labels: ['pH', 'Temperature'], // Labels for the data
        datasets: [
          {
            label: 'Real-Time Data',
            data: [data.ph, data.temp], // Data from state
            backgroundColor: [gradient1, gradient2], // Gradient color for bars
            hoverBackgroundColor: ['#ff6384', '#36a2eb'], // Hover colors
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            borderRadius: 10, // Rounded bar edges for a modern look
            hoverBorderWidth: 3,
            barThickness: 60, // Custom thickness
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'category',
            ticks: {
              color: '#fff', // White text on x-axis
            }
          },
          y: {
            beginAtZero: true,
            max: 25,
            ticks: {
              color: '#fff', // White text on y-axis
            }
          }
        },
        plugins: {
          legend: {
            display: false, // Hides the legend
          },
          tooltip: {
            enabled: true, // Tooltip shows data
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.parsed.y}`,
            },
            backgroundColor: '#fff', // Tooltip background color
            titleColor: '#000', // Tooltip title color
            bodyColor: '#000', // Tooltip text color
          }
        },
        layout: {
          padding: 20, // Padding around the chart
        },
      },
    });

    // Cleanup the chart instance when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]); // Dependency on data to update the chart when data changes

  return (
    <div className="data-section">
      <h3 className="data-title">Real-Time Data</h3>
      <div className="data-values">
        <p><span className="data-label">pH:</span> {data.ph}</p>
        <p><span className="data-label">Temperature:</span> {data.temp} °C</p>
      </div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default RealTimeData;
