const jwt = require ('jsonwebtoken');


const checkToken = (req, res, next) => {
    const token = undefined;
    if (typeof token === 'string') {token = req.headers.authorization.split(' ')[1]}
    if (!token) {
        return res.status(401).json ({
            msg: 'No tienes acceso'
        })
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {expiresIn: '2h'})
    console.log(decoded)


    // if (!req.headers ['authorization']) {
    //     return console.log (res.json({error: 'Acceso denegado'}));
    // }
    // const token = req.headers['authorization'];
    
    // let payload;
    // try {
    //     payload = jwt.verify(token, process.env.JWT_SECRET)
    // } catch (error){
    //     return res.json ({error: 'El token no es correcto'});
    // }

    next ();
}

module.exports = checkToken