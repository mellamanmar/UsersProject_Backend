const verifyToken = require('./generateToken')
const User = require ('../Users/models/users')


// const checkAuth = async (req, res, next) => {
//     try {
//         const token = req.headers.authorization.split('').pop() //TODO: ['Bearer','TOKEN']
//         const tokenData = verifyToken(token)
//         console.log(tokenData)
//         if (!tokenData) {
//             res.status(400)
//             res.send({error: 'Token inválido'})
//         } else {
//             const userDetail = await User.findById(verifyToken._id)
//             req.username = userDetail;
//             next()
//         }
//     } catch (e) {
//         console.log('Error en autenticación')
//         res.status(400)
//         res.send({error: 'Algo sucedió en el middleware authToken'})
//     }
// }

const checkAuth = async (req, res, next) => {
    try {
        //TODO: authorization: Bearer 1010101010101001010100 
        const token = req.headers.authorization.split(' ').pop() //TODO:123123213
        const tokenData = await verifyToken(token)
        if (tokenData.username) {
            next()
        } else {
            res.status(409)
            res.send({ error: 'Token inválido' })
        }
        res

    } catch (e) {
        console.log(e)
        res.status(409)
        res.send({ error: 'Algo sucedió en el middleware authToken' })
    }

}

module.exports = checkAuth
