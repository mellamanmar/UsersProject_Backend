const { mongoose } = require("mongoose");

const Schema = mongoose.Schema
const UserSchema = new Schema ({
    email: {
        type: String,
        require: true,
        unique: true
    },
    //Contraseña mínimo 6 caracteres
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    //Columna para asignar el tipo de usuario al crearlo
    userType: {
        type: ['admin', 'user'],
        require: true
    }
})

module.exports = mongoose.model('User', UserSchema);
