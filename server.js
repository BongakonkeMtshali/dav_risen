const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your_secret', resave: false, saveUninitialized: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/davrisen', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/api/music', require('./routes/music')); // Example route for music

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
