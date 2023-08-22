// Importar el modelo de Post
const Post = require('../models/Post');
const User = require('c:/Users/Gyna/Desktop/Bootcamp/FullStack/Libreria/UsersProject_Backend/Users/models/users');

// Función para obtener todas las publicaciones
const controllerForum = {

    getPosts: async (req, res) => {
        try {
            // Consultar y obtener todas las publicaciones desde la base de datos
            const posts = await Post.find();
            return res.status(200).json(posts);
        } catch (error) {
            return res.status(500).json({ message: 'Error al obtener las publicaciones' });
        }
    },

    getPostsByUsername: async (req, res) => {
        try {
            const username = req.params.username
            // const userExists= await User.exists({username});
            // if (!userExists) {
            //   return res.status(400).json({ message: 'Username does not exist' });
            //  }
            const posts = await Post.filter(username1 => username1 === username)
            return res.json(posts)
        } catch (error) {
            return res.status(500).json({ message: 'Error al obtener las publicaciones' })
        }
    },

    // Función para crear una nueva publicación
    createPost: async (req, res) => {
        try {
            const title = req.body.title
            const content = req.body.content
            const username = req.body.username
            // const userExists= await User.exists({username});
            // if (!userExists) {
            //   return res.status(400).json({ message: 'Username does not exist' });
            //  }
            await Post.create({
                title: title,
                content: content,
                username: username
            })

            res.status(201).json({ message: 'Post created' });
        } catch (error) {
            res.status(500).json({ message: 'Error creating post' });
        }
    },

    // Función para eliminar una publicación
    deletePost: async (req, res) => {
        try {
            const { id } = req.params;

            // Eliminar la publicación de la base de datos según su ID
            await Post.findByIdAndDelete(id);

            res.status(200).json({ message: 'Post delete ' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting post' });
        }
    }

}

// Exportar las funciones del controlador para usarlas en otros archivos
module.exports = controllerForum;
