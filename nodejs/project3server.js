const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

app.use(cors());
app.use(express.json());
const PORT = 5000;

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'weather_app',
});

db.connect((err) => {
  if (err) throw err;
  console.log('✅ Connected to MySQL DB');
});

// POST /api/weather - Fetch from DB, store in history if found
app.post('/api/weather', (req, res) => {
  const { city } = req.body;
  if (!city) return res.status(400).json({ error: 'City is required' });

  db.query(
    'SELECT city, temperature AS temp, humidity, weather AS description FROM search_history WHERE city = ? ORDER BY id DESC LIMIT 1',
    [city],
    (err, results) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      if (results.length === 0) {
        return res.status(404).json({ error: 'City not found' });
      }

      const weatherInfo = results[0];
      const today = new Date().toISOString().split('T')[0];

      // Insert the successful search into history
      db.query(
        'INSERT INTO search_history (city, temperature, humidity, weather, search_date) VALUES (?, ?, ?, ?, ?)',
        [weatherInfo.city, weatherInfo.temp, weatherInfo.humidity, weatherInfo.description, today],
        (insertErr) => {
          if (insertErr) {
            console.error('Insert error:', insertErr);
            return res.status(500).json({ error: 'Failed to store history' });
          }
          res.json(weatherInfo);
        }
      );
    }
  );
});

// GET /api/history - Fetch last 10 records
app.get('/api/history', (req, res) => {
  db.query(
    'SELECT city, temperature, humidity, weather, search_date AS date FROM search_history ORDER BY id DESC LIMIT 10',
    (err, results) => {
      if (err) return res.status(500).json({ error: 'Failed to retrieve history' });
      res.json(results);
    }
  );
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
