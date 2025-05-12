import React from 'react';

const WeatherDisplay = ({ weather }) => {
  const styles = {
    container: {
      marginTop: 30,
      padding: 20,
      backgroundColor: '#e0f7fa',
      borderRadius: 12,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      maxWidth: 400,
      margin: '30px auto',
      textAlign: 'left',
      fontFamily: 'Segoe UI, sans-serif',
    },
    heading: {
      textAlign: 'center',
      color: '#00796b',
      marginBottom: 20,
    },
    label: {
      fontWeight: 'bold',
      color: '#004d40',
    },
    value: {
      marginBottom: 10,
      fontSize: 16,
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🌤️ Current Weather</h2>
      <p style={styles.value}><span style={styles.label}>City:</span> {weather.city}</p>
      <p style={styles.value}><span style={styles.label}>Temperature:</span> {weather.temp} °C</p>
      <p style={styles.value}><span style={styles.label}>Humidity:</span> {weather.humidity}%</p>
      <p style={styles.value}><span style={styles.label}>Weather:</span> {weather.description}</p>
    </div>
  );
};

export default WeatherDisplay;
