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
            await newUser.create();
            const newUserObject = res.json ({ user: newUser, token: createToken(newUser) })
            return newUserObject
        } catch (error) {
            return res.status(500).json ({msg:"No es posible crear el usuario"})
            }
            
    },

    signIn: async (req, res) => {
        try{
        const { username, password } = req.body
        const user = await User.findOne({username})

        if (!user) {return res.status(401).send("El nombre de usuario no es válido")}
        if (user.password !== password) {return res.status(401).send("Contraseña incorrecta")}
    
        const token = jwt.sign({id: user.id, role:user.userType}, process.env.JWT_SECRET)
        res.status(200).json({data:user, token})
        }
        catch{
        return res.status(500).json({msg:error.message})}
        
    }
    
}

function createToken(user) {
    const payload = { user_id: user._id, user_role: user.userType}
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '12h'})
}


module.exports = controllerAuth