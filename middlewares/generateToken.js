const jwt = require('jsonwebtoken') //TODO : 😎

const tokenSign = async (user) => { //TODO: Genera Token
    return jwt.sign(
        {
            id: user.id, 
            role: user.role
        },
        process.env.JWT_SECRET, //TODO ENV 
        {        }
    );
}

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



module.exports = tokenSign;
module.exports = verifyToken;
module.exports = decodeSign;