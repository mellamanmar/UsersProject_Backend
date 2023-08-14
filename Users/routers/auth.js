// Importar Express y el controlador de autenticación
const express = require('express');
const authController = require('../controllers/authController'); // Supongo que este archivo contiene las funciones register y login

// Crear un enrutador utilizando Express Router
const router = express.Router();

// Definir las rutas y sus correspondientes funciones del controlador
router.post('/register', authController.register); // Ruta para registrar un nuevo usuario
router.post('/login', authController.login); // Ruta para iniciar sesión

// Exportar el enrutador para su uso en otros archivos
module.exports = router;
