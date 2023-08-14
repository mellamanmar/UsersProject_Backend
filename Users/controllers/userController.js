// Importar el modelo de User
const User = require('../models/User');

// Función para obtener el perfil de un usuario
const getUserProfile = async (req, res) => {
    try {
        const userId = req.userId;

        // Buscar el perfil del usuario en la base de datos por su ID
        const userProfile = await User.findByPk(userId, { attributes: ['id', 'username'] });
        if (!userProfile) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json(userProfile);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el perfil del usuario' });
    }
};

// Función para editar el perfil de un usuario
const editUserProfile = async (req, res) => {
    try {
        const userId = req.userId;
        const { newUsername } = req.body;

        // Buscar al usuario en la base de datos por su ID
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Actualizar el nombre de usuario y guardar los cambios en la base de datos
        user.username = newUsername;
        await user.save();

        res.status(200).json({ message: 'Perfil de usuario actualizado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el perfil del usuario' });
    }
};

// Exportar las funciones del controlador para usarlas en otros archivos
module.exports = { getUserProfile, editUserProfile };
