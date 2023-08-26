const jwt = require('jsonwebtoken') //TODO : 😎
require('dotenv').config();


const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (e) {
        return null
    }
}

const decodeSign = (token) => { //TODO: Verificar que el token sea valido y correcto
    return jwt.decode(token, null)
}

module.exports = verifyToken;
module.exports = decodeSign;