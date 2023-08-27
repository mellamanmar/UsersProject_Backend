const User = require ('../models/users')
const generateSign = require('../../middlewares/generateToken')
const moment = require('moment')


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
            await newUser.save()

            res.send({data: newUser})

        } catch (error) {
            return res.status(500).json ({msg:'Error al crear el usuario'})
            }
            
    },

    signIn: async (req, res) => {
        try{
        const today = moment()
        const { username, password } = req.body
        const user = await User.findOne({username})

        if (!user) {return res.status(401).send("El nombre de usuario no es válido")}
        if (user.password !== password) {return res.status(401).send("Contraseña incorrecta")}
            res.json ({
                succes: 'Has ingresado',
                token: generateSign(user)
            })
        } catch (error) {
            console.log (error)
        }
    
    }
}

module.exports = controllerAuth