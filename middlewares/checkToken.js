const jwt = require ('jsonwebtoken');


const checkToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split('.')[1]
        if (!token) {
            return res.status(401).json ({
                msg: 'No tienes acceso'
            })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET, {expiresIn: '2h'})
        console.log(decoded) 
    } catch {
        res.json({msg: 'Error al verificar el token'})

    }
    next ();
}

module.exports = checkToken