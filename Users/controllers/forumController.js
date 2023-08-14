// Importar el modelo de Post
const Post = require('../models/Post');

// Función para obtener todas las publicaciones
const getPosts = async (req, res) => {
    try {
        // Consultar y obtener todas las publicaciones desde la base de datos
        const posts = await Post.findAll();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las publicaciones' });
    }
};

// Función para crear una nueva publicación
const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;

        // Crear una nueva publicación en la base de datos
        const newPost = await Post.create({ title, content });

        res.status(201).json({ message: 'Publicación creada con éxito', post: newPost });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la publicación' });
    }
};

// Función para eliminar una publicación
const deletePost = async (req, res) => {
    try {
        const postId = req.params.postId;

        // Eliminar la publicación de la base de datos según su ID
        await Post.destroy({ where: { id: postId } });

        res.status(200).json({ message: 'Publicación eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la publicación' });
    }
};

// Exportar las funciones del controlador para usarlas en otros archivos
module.exports = { getPosts, createPost, deletePost };
