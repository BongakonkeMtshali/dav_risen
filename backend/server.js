const express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv'); // Require dotenv
const app = express();
const PORT = process.env.PORT || 3000;

// Load environment variables from .env file
dotenv.config();

// Middleware to parse JSON
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432, // Default PostgreSQL port
});

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Dav Risen API');
});

// Endpoint to get music tracks
app.get('/api/music', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM music');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
