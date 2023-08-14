// Importar Express y crear una instancia de la aplicación
const express = require('express');
const app = express();

// Importar las rutas para autenticación y el foro
const authRoutes = require('./routes/auth'); //  este archivo configura las rutas relacionadas con la autenticación
const forumRoutes = require('./routes/forum'); // este archivo configura las rutas relacionadas con el foro

// Configurar el middleware para manejar datos en formato JSON
app.use(express.json());

// Usar las rutas importadas y asignarles prefijos de URL
app.use('/auth', authRoutes); // Todas las rutas de autenticación tendrán el prefijo '/auth'
app.use('/forum', forumRoutes); // Todas las rutas relacionadas con el foro tendrán el prefijo '/forum'

// Definir el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
