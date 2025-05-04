require('dotenv').config();
const { Pool } = require('pg');
const express = require('express');
const app = express();
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

  app.get('/users', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM users'); // Replace 'users' with your table
      res.json(result.rows);
    } catch (err) {
      console.error('Error querying DB:', err);
      res.status(500).send('Server error');
    }
  });

app.get('/', (req, res) => {
    res.send('I love you Nara!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

