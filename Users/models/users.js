const { mongoose, trusted } = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    //Email registrado
    email: {
        type: String,
        require: true,
    },
    //Nombre de usuario
    username: {
        type: String,
        require: true,
        unique:true
    },
    //Contraseña mínimo 6 caracteres
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    //Columna para asignar el tipo de usuario al crearlo
    userType:  {
        type: String,
        require: true,
        enum: ['admin', 'user']
    },

    __v: {
        type:Number,
        select: false
    }
})

module.exports = mongoose.model('User', UserSchema);
