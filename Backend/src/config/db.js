const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false,
    }
);

// Probar la conexión
sequelize.authenticate()
    .then(() => {
        console.log('Conexión exitosa a PostgreSQL con Sequelize');
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos PostgreSQL con Sequelize:', err);
    });

module.exports = sequelize;