import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Forecast = () => {
  // State to hold the prediction from the backend
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock data for testing
  const waterData = {
    ph: 7.6,
    temperature: 24
  };

  useEffect(() => {
    // Function to fetch the forecasted data from the backend
    const fetchPrediction = async () => {
      try {
        // Set loading state
        setLoading(true);

        // Send data to Flask API
        const response = await axios.post('http://127.0.0.1:5000/predict', waterData);

        // Update the state with the prediction data
        setPrediction(response.data.quality_prediction);
      } catch (err) {
        setError('Error fetching the prediction');
      } finally {
        setLoading(false);
      }
    };

    // Call the function to fetch the prediction when the component loads
    fetchPrediction();
  }, []); // Empty dependency array to run effect once

  return (
    <div>
      <h3>Water Quality Forecast</h3>
      {loading ? (
        <p>Loading prediction...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>Predicted Water Quality: {prediction}</p>
      )}
    </div>
  );
};

export default Forecast;
