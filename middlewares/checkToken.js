const jwt = require ('jsonwebtoken');


const checkToken = (req, res, next) => {
    if (!req.headers ['authorization']) {
        return console.log (res.json({error: 'Acceso denegado no tienes el token'}));
    }
    const token = req.headers['authorization'];
    
    let payload;
    try {
        payload = jwt.verify(token, process.env.JWT_SECRET)
    } catch (error){
        return res.json ({error: 'El token no es correcto'});
    }

    next (console.log('Token verificado con éxito'));
}

module.exports = checkToken