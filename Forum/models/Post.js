const { mongoose, trusted } = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        require: true,
        minlength: 6
    },
    content: {
        type: String,
        require: true,
        minlength: 20
    },
    username: {
        type:String,
        ref: 'User',
        require: true,
    },

    __v: {
        type:Number,
        select: false
    }
    
    // user: {
    //     ref: 'User', // Hace referencia al modelo de usuarios
    //     type: mongoose.Schema.Types.ObjectId, // Almacenarás el _id del usuario
    //     required: true,
    // }

    // versionKey:false
});


// Exportar el modelo para su uso en otras partes de la aplicación
module.exports = mongoose.model('Post', PostSchema);
