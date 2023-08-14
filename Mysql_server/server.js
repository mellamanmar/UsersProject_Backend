// Importar las dependencias necesarias
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

// Crear una instancia de Express
const app = express();
const port = 3000;

// Configurar el middleware para el manejo de datos en formato JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurar la conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: 'localhost', // Dirección del servidor MySQL
    user: 'tu_usuario', // Nombre de usuario de MySQL
    password: 'tu_contraseña', // Contraseña de MySQL
    database: 'baseanddata' // Nombre de la base de datos
});

// Conectar a la base de datos MySQL
connection.connect(err => {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL');
});

// Obtener todos los usuarios
app.get('/api/users', (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Crear un nuevo usuario
app.post('/api/users', (req, res) => {
    const { username, email } = req.body;
    connection.query('INSERT INTO users (username, email) VALUES (?, ?)', [username, email], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Usuario creado exitosamente' });
    });
});

// Definir más rutas y controladores según tus necesidades

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor de backend escuchando en http://localhost:${port}`);
});
