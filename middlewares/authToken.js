// Importar la librería JSON Web Tokens (jwt)
const jwt = require('jsonwebtoken');

// Middleware de autenticación
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization; // Obtener el token del encabezado de la solicitud

    if (!token) {
        return res.status(401).json({ message: 'Acceso no autorizado' });
    }

    try {
        const decodedToken = jwt.verify(token, 'mi_secreto'); // Verificar y decodificar el token utilizando la clave secreta
        req.userId = decodedToken.userId; // Agregar el ID del usuario decodificado a la solicitud
        next(); // Continuar con la siguiente función de middleware o ruta
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }
};

// Exportar el middleware para su uso en otras partes de la aplicación
module.exports = authMiddleware;
