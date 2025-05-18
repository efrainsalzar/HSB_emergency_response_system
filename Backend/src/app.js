const express = require('express');
const usuarioRoutes = require('./routes/UsuarioRoute');
require('dotenv').config();
require('./config/db');

const app = express();

// Middlewares
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API is running');
});

// Rutas de usuario
app.use('/api/usuarios', usuarioRoutes);

module.exports = app;