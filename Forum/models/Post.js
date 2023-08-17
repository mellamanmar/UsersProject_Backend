// Importar Sequelize y la instancia de sequelize
const Sequelize = require('sequelize');
const sequelize = require('../db'); // este es el archivo que importa y configura la conexión a la base de datos

// Definir el modelo de datos para los posts
const Post = sequelize.define('post', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    username: 
});

// Exportar el modelo para su uso en otras partes de la aplicación
module.exports = Post;
