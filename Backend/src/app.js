const express = require('express');
const db = require('./config/db');

// app.js

const app = express();

// Middlewares
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('API is running');
});

module.exports = app;

