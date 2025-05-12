import React, { useState } from 'react';

const WeatherForm = ({ onSearch, onViewHistory }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) onSearch(city);
  };

  const styles = {
    container: {
      margin: '30px auto',
      textAlign: 'center',
      padding: 20,
      backgroundColor: '#f0f8ff',
      borderRadius: 12,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      maxWidth: 600,
    },
    input: {
      padding: '12px 16px',
      width: 250,
      fontSize: 16,
      borderRadius: 8,
      border: '1px solid #ccc',
      marginRight: 12,
      outline: 'none',
      transition: 'border 0.3s ease-in-out',
    },
    button: {
      padding: '12px 20px',
      fontSize: 16,
      borderRadius: 8,
      border: 'none',
      cursor: 'pointer',
      backgroundColor: '#00796b',
      color: '#fff',
      marginRight: 10,
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#004d40',
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Enter the city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={styles.input}
      />
      <button
        onClick={handleSearch}
        style={styles.button}
        onMouseOver={e => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseOut={e => e.target.style.backgroundColor = styles.button.backgroundColor}
      >
        Search
      </button>
      <button
        onClick={onViewHistory}
        style={styles.button}
        onMouseOver={e => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseOut={e => e.target.style.backgroundColor = styles.button.backgroundColor}
      >
        View History
      </button>
    </div>
  );
};

export default WeatherForm;
