// Importar Sequelize y la instancia de sequelize
const Sequelize = require('sequelize');
const sequelize = require('../db'); // creo  que este es elarchivo importa y configura la conexión a la base de datos

// Definir el modelo de datos para los usuarios
const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // Garantiza que no haya duplicados de nombres de usuario
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    role: {
        type: Sequelize.ENUM('admin', 'user'), // Enumeración para roles
        allowNull: false,
        defaultValue: 'user', // Valor por defecto si no se especifica
    },
});

// Exportar el modelo para su uso en otras partes de la aplicación
module.exports = User;
