// Importar el modelo de Post
const Post = require('../models/Post');
const users = require('../../Users/models/users');

// Función para obtener todas las publicaciones
const controllerForum = {
    // Función para crear una nueva publicación
    createPost: async (req, res) => {
        try {
            const title = req.body.title
            const content = req.body.content
            const username = req.body.username
            // const userId=req.body.userId
            // const user = await users.findById(userId)
            // if(!user){
            //     return res.status(404).json({error:'this action is not possible'});
            // }
            await Post.create({
                username: username,
                title: title,
                content: content,
                // user:user._id,    
            })

            res.status(201).json({ message: 'Post created' });
        } catch (error) {
            res.status(500).json({ message: 'Error creating post' });
        }
    },

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
        let username = req.params.username;
        try {

            const posts = await Post.find({ username: username });
            return res.json(posts)
        }
        catch (error) {
            return res.status(500).json({ message: 'Error al obtener las publicaciones' })
        }
    },

    // Función para obtener una publicación por su ID
    getPostsById: async (req, res) => {
        try {
            const { id } = req.params;
            const post = await Post.findById(id);

            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }

            res.status(200).json(post);
        } catch (error) {
            res.status(500).json({ message: 'Error getting post by ID' });
        }
    },

    // Función para editar una publicación
    editPost: async (req, res) => {
        try {
            const { id } = req.params;
            const { title, content } = req.body;

            // Buscar la publicación por su ID y actualizar sus campos
            const updatedPost = await Post.findByIdAndUpdate(id, { title, content }, { new: true });

            if (!updatedPost) {
                return res.status(404).json({ message: 'Post not found' });
            }

            res.status(200).json({ message: 'Post updated', post: updatedPost });
        } catch (error) {
            res.status(500).json({ message: 'Error updating post' });
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
