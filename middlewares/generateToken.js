const jwt = require('jsonwebtoken') //TODO : 😎
require('dotenv').config();


const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (e) {
        console.log('No se logra verificar token')
        return null
    }
}

const generateSign = async (user) => {
    try {
        const token = jwt.sign ({
            username: user.username,
            password: user.password
            }, process.env.JWT_SECRET,
            {expiresIn:"12h"}
        )
        return token
    } catch (e) {
        console.log ('No se puede generar el token')
        return null
    }
}

// const decodeSign = (token) => { //TODO: Verificar que el token sea valido y correcto
//     return jwt.decode(token, null)
// }

module.exports = {verifyToken, generateSign}