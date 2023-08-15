// Importar el modelo de User
const User = require('../models/users');


const controllerUser = {
    // Función para obtener el perfil de un usuario
    getUserProfile : async (req, res) => {
        try {
            const {id} = req.params
            const email = await User.findById(id)
            const username = await User.findById(id)
            const password = await User.findById(id)
            res.json(
                email,
                username,
                password
            )
        } catch (error){
            res.status(500).json({ msg: 'Error al obtener el perfil del usuario' })
        }
},

// Función para editar el perfil de un usuario
    editUserProfile : async (req, res) => {
        try {
            const {id} = req.params
            const username = req.body.username
            const password = req.body.password
            await User.findByIdAndUpdate(id,{
                username : username,
                password : password
            })
            res.json({msg:'Usuario actualizado con éxito'})
        } catch (error) {
            console.error(error)
            return res.status(500).json({ msg: 'Error al actualizar el perfil del usuario' });
        }
},

// Eliminar perfil de un usuario
    deleteUserProfile : async (req, res) => {
        try {
            const {id} = req.params
            await User.findByIdAndDelete(id)
            res.json({msg:'Perfil eliminado con éxito'})
        } catch (error) {
            console.error(error)
            return res.status(500).json({msg:error.message})
        }
    },
    
}


// Exportar las funciones del controlador para usarlas en otros archivos
module.exports = { controllerUser };
