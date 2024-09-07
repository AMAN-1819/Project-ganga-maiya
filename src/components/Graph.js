import { Line } from 'react-chartjs-2';

const Graph = () => {
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4'],
    datasets: [
      {
        label: 'Water Quality',
        data: [65, 59, 80, 81],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h3>Water Quality Trend</h3>
      <Line data={data} />
    </div>
  );
};

export default Graph;
