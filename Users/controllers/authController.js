const User = require ('../models/users')
const jwt = require ('jsonwebtoken')

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
            
            const token = jwt.sign({id: newUser.id}, 'secretkey')
            res.status(200).json({token})

        } catch (error) {
            return res.status(500).json ({msg:error.message})
            }
            
    },

    signIn: async (req, res) => {
        const { username, password } = req.body
        const user = await User.findOne({username})

        if (!user) return res.status(401).send("El nombre de usuario no es válido")
        if (user.password !== password) return res.status(401).send("Contraseña incorrecta")

        const token = jwt.sign({id: user.id}, 'secretkey')
        return res.status(200).json({token})  
    },
}

module.exports = controllerAuth