// Importar las dependencias necesarias
const bcrypt = require('bcryptjs'); // Librería para el hashing de contraseñas
const jwt = require('jsonwebtoken'); // Librería para generar y verificar tokens JWT
const User = require('../models/User'); // Importar el modelo de usuario
const authMiddleware = require('../middlewares/authMiddleware'); // Middleware de autenticación (probablemente se usará más adelante)

// Función para registrar un nuevo usuario
const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Verificar si el usuario ya existe en la base de datos
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Generar un hash seguro para la contraseña antes de almacenarla
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear un nuevo usuario en la base de datos
        const newUser = await User.create({ username, password: hashedPassword });

        res.status(201).json({ message: 'Usuario registrado con éxito', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el usuario' });
    }
};

// Función para iniciar sesión de un usuario
const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Buscar el usuario en la base de datos por su nombre de usuario
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Verificar si la contraseña proporcionada coincide con la almacenada en la base de datos
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Generar un token JWT para el usuario autenticado
        const token = jwt.sign({ userId: user.id, username: user.username }, 'mi_secreto');

        res.status(200).json({ message: 'Inicio de sesión exitoso', token });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};

// Exportar las funciones del controlador para usarlas en otros archivos
module.exports = {
    register,
    login
};
