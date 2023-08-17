// Importar el modelo de Post
const Post = require('../models/Post');

// Función para obtener todas las publicaciones
const controllerForum ={

    getPosts :async (req, res) => {
    try {
        // Consultar y obtener todas las publicaciones desde la base de datos
        const posts = await Post.findAll();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las publicaciones' });
    }
    },
    getPostsByUsername: async (req,res) =>{
    try {
        const {username} = req.params.username
        const posts = await Post.find({username})
        return res.json(posts)
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener las publicaciones' })              
    }
    },

// Función para crear una nueva publicación
    createPost :async (req, res) => {
    try {
        const { title, content, username } = req.body;

        // Crear una nueva publicación en la base de datos
        const newPost = await Post.create({ title, content, username });

        res.status(201).json({ message: 'Post created', post: newPost });
    } catch (error) {
        res.status(500).json({ message: 'Error creating post' });
    }
    },

// Función para eliminar una publicación
    deletePost : async (req, res) => {
    try {
        const postId = req.params.postId;

        // Eliminar la publicación de la base de datos según su ID
        await Post.destroy({ where: { id: postId } });

        res.status(200).json({ message: 'Post delete ' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post' });
    }
    }
}

// Exportar las funciones del controlador para usarlas en otros archivos
module.exports = controllerForum;
