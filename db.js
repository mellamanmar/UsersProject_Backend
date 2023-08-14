const Sequelize = require('sequelize'); // Importar el módulo Sequelize

// Crear una instancia de Sequelize para la conexión a la base de datos
const sequelize = new Sequelize('nombre_de_la_base_de_datos', 'usuario', 'contraseña', {
    host: 'localhost', // Dirección del servidor de la base de datos
    dialect: 'mysql', // Dialecto de la base de datos (en este caso, MySQL)
});

module.exports = sequelize; // Exportar la instancia de Sequelize para su uso en otros archivos
