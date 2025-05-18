Para crear una API RESTful con PostgreSQL en tu backend (asumiendo Node.js y Express), necesitas las siguientes dependencias principales:

```markdown
## Dependencias principales

- [express](https://www.npmjs.com/package/express): Framework para crear el servidor HTTP.
- [pg](https://www.npmjs.com/package/pg): Cliente de PostgreSQL para Node.js.
- [dotenv](https://www.npmjs.com/package/dotenv): Para manejar variables de entorno (opcional pero recomendado).
- [cors](https://www.npmjs.com/package/cors): Middleware para habilitar CORS (opcional, pero útil para APIs públicas).

## Instalación

```bash
npm install express pg dotenv cors
```

Si usas otro lenguaje o framework, indícalo para una lista específica.



## Errores comunes en APIs RESTful

A continuación se listan algunos de los errores HTTP más comunes que puedes encontrar al trabajar con APIs:

- **400 Bad Request**: La solicitud enviada por el cliente es incorrecta o está mal formada.
- **401 Unauthorized**: Falta autenticación o las credenciales proporcionadas no son válidas.
- **403 Forbidden**: El cliente está autenticado pero no tiene permisos para acceder al recurso.
- **404 Not Found**: El recurso solicitado no existe en el servidor.
- **409 Conflict**: Hay un conflicto con el estado actual del recurso (por ejemplo, datos duplicados).
- **500 Internal Server Error**: Error interno del servidor, generalmente por un fallo inesperado en el backend.
- **502 Bad Gateway**: El servidor recibió una respuesta inválida de otro servidor.
- **503 Service Unavailable**: El servidor no está disponible temporalmente, generalmente por mantenimiento o sobrecarga.

Estos códigos ayudan a identificar y solucionar problemas en el desarrollo y consumo de APIs.


## TEST

## Pruebas unitarias
npx jest src/__tests__/unit

## Pruebas de integracion
npx jest src/__tests__/integration