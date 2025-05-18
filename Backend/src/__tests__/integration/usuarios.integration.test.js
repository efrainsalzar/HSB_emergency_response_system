const request = require('supertest');
const app = require('../../app');

const sequelize = require('../../config/db');

// Grupo de pruebas para el endpoint GET /api/usuarios
describe('GET /api/usuarios', () => {

  it('debe responder con status 200 y un array', async () => {
    // peticion GET
    const res = await request(app).get('/api/usuarios');
    // Verifica que el código de estado HTTP sea 200 (OK)
    expect(res.statusCode).toBe(200);
    // Verifica que el cuerpo de la respuesta sea un array
    expect(Array.isArray(res.body)).toBe(true);

  });
});

// cerrar la conexion
afterAll(async () => {
  await sequelize.close();
});