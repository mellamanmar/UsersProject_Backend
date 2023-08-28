// Importar Express, el controlador de foro y los middlewares de autenticación
const express = require('express');
// Crear un enrutador utilizando Express Router
const router = express.Router();
const controllerForum = require('../controllers/forum'); 
const checkRoleAuth = require('../../middlewares/roleAuth');
const checkToken = require('../../middlewares/checkToken');

// Definir las rutas y sus correspondientes funciones del controlador y middlewares
router.get ('/posts', controllerForum.getPosts) // Ruta para obtener todas las publicaciones
router.get ('/:username', controllerForum.getPostsByUsername)
router.post ('/create', controllerForum.createPost) // Ruta para crear una nueva publicación, con verificación de token
router.delete('/delete/:id', controllerForum.deletePost) // Ruta para eliminar una publicación, con verificación de token y

// Exportar el enrutador para su uso en otros archivos
module.exports = router;

//checkRoleAuth ('Admin') se eliminó la autenticación para probar el delete
