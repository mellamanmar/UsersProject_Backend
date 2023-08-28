const jwt = require('jsonwebtoken') //TODO : 😎


const generateSign = async (user) => {
    try {
        const payload = {
            user_username : user.username,
            user_password : user.password
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET)
        return console.log(token)
    } catch (e) {
        console.log ('No se puede generar el token')
        return null
    }
}

// const decodeSign = (token) => { //TODO: Verificar que el token sea valido y correcto
//     return jwt.decode(token, null)
// }

module.exports = generateSign