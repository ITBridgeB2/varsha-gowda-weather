import React from 'react';

const History = ({ history }) => {
  return (
    <div style={{ marginTop: 30, backgroundColor: 'lightyellow', padding: 20, borderRadius: 10, width: '60%', margin: 'auto' }}>
      <h2 style={{ color: '#333', marginBottom: 15 }}> Recent Searches</h2>
      {history.length === 0 ? (
        <p style={{ color: '#777' }}>No search history available.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {history.map((item, index) => (
            <li
              key={index}
              style={{
                marginBottom: 12,
                padding: 12,
                backgroundColor: 'lightblue',
                borderRadius: 6,
                border: '1px solid #ccc',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              }}
            >
              <strong>{item.city}</strong> — {new Date(item.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
