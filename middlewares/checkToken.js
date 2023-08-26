const jwt = require ('jsonwebtoken');
require('dotenv').config();



const checkToken = (req, res, next) => {
    if (!req.headers ['authorization']) {
        return console.log (res.json({error: 'Acceso denegado'}));
    }
    const token = req.headers['authorization'];
    
    let payload;
    try {
        payload = jwt.verify(token, process.env.JWT_SECRET)
    } catch (error){
        return res.json ({error: 'El token no es correcto'});
    }

    next ();
}

module.exports = {checkToken}