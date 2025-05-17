const app = require('./app');

const PORT = process.env.DB_PORT;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});