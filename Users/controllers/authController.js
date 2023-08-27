const User = require ('../models/users')
const tokenSign = require('../../middlewares/generateToken')
const jwt = require('jsonwebtoken')
require('dotenv').config();


const controllerAuth = {
    test: (req, res) => {
        res.send('Hello world')
    },

    get: async (req, res) => {
        try {
            const email = await User.find({})
            const username = await User.find({})
            const userType = await User.find({})
        
        res.json (
            email,
            username,
            userType,
        )
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },

    signUp: async (req, res) => {
        try {
            const {email, username, password, userType} = req.body
            const newUser = new User({email, username, password, userType})
            await newUser.save();
            const newUserObject = res.json ({ user: newUser, token: createToken(newUser) })
            return newUserObject
        } catch (error) {
            return res.status(500).json ({msg:"No es posible crear el usuario"})
            }
            
    },

    signIn: async (req, res) => {
        try{
        const { username, password, userType } = req.body
        const user = await User.findOne({username})

        if (!user) {return res.status(401).send("El nombre de usuario no es válido")}
        if (user.password !== password) {return res.status(401).send("Contraseña incorrecta")}
        const userObject = res.json ({ user: user, token: createToken(user) })
            return userObject
        }
        catch{
        return res.status(500).json({msg:error.message})}
        
    }
    
}

function createToken(user) {
    const payload = { user_username: user.username, user_role: user.userType}
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '2h'})
}


module.exports = controllerAuth