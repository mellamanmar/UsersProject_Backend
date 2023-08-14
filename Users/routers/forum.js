// Importar Express, el controlador de foro y los middlewares de autenticación
const express = require('express');
const forumController = require('../controllers/forumController'); // Supongo que este archivo contiene las funciones getPosts, createPost y deletePost
const { verifyToken, isAdmin } = require('../middleware/authMiddleware'); // Supongo que estos middlewares se encargan de verificar el token y el rol del usuario

// Crear un enrutador utilizando Express Router
const router = express.Router();

// Definir las rutas y sus correspondientes funciones del controlador y middlewares
router.get('/', forumController.getPosts); // Ruta para obtener todas las publicaciones
router.post('/', verifyToken, forumController.createPost); // Ruta para crear una nueva publicación, con verificación de token
router.delete('/:postId', verifyToken, isAdmin, forumController.deletePost); // Ruta para eliminar una publicación, con verificación de token y verificación de rol de administrador

// Exportar el enrutador para su uso en otros archivos
module.exports = router;
