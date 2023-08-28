const userModel = require('./../Users/models/users')
const checkToken = require('./checkToken')

const checkRoleAuth = (roles) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1] //TODO: 231231321
        const tokenData = await checkToken(token)
        const userData = await userModel.findById(tokenData.id) //TODO: 696966

        //TODO ['admin'].includes('user')
    
        if (['admin'].concat(roles).includes(userData.userType)) { //TODO:
            next()
        } else {
            res.status(409)
            res.send({ error: 'No tienes permisos' })
        }

    } catch (e) {
        console.log(e)
        res.status(409)
        res.send({ error: 'Error' })
    }

}

module.exports = checkRoleAuth;