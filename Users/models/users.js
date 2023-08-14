const { error } = require("console");
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
    // userType: (type) => {
    //     if (type === 'admin') {
    //         return userType = 'admin'
    //     } else {
    //         if (type === 'user') {
    //             return userType = 'user'
    //         } else (console.error('Type is not valid'))
    //     }
    // }
})

module.exports = mongoose.model('User', UserSchema);
