import React, { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';
import History from './History';
import WeatherForm from './WeatherForm';

function App() {
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);

  const handleSearch = async (city) => {
    try {
      const res = await axios.post('http://localhost:5000/api/weather', { city });
      setWeather(res.data);
    } catch (err) {
      alert('Please insert correct city name');
      setWeather(null);
    }
  };

  const handleHistory = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/history');
      setHistory(res.data);
    } catch {
      alert('Failed to load history');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: 30, fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: 30, color: '#1e90ff' }}>🌤️ Weather Dashboard </h1>
      <WeatherForm onSearch={handleSearch} onViewHistory={handleHistory} />
      {weather && <WeatherDisplay weather={weather} />}
      <History history={history} />
    </div>
  );
}

export default App;
