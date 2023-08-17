const { mongoose, trusted } = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        allowNull: false,
    },
    content: {
        type: String,
        allowNull: false,
    },
    username: {
        type: Schema.Types.ObjectId, 
        ref: "User", 
        require: true
    },
});


// Exportar el modelo para su uso en otras partes de la aplicación
module.exports = mongoose.model('Post', PostSchema);
