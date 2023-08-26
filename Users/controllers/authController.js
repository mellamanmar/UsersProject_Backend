const User = require ('../models/users')
const generateSign = require('../../middlewares/generateToken')
const {} = require ('')


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
            return res.status(500).json ({msg:'error al crear el usuario'})
            }
            
    },

    signIn: async (req, res) => {
        try{
        const { username, password } = req.body
        const user = await User.findOne({username})

        if (!user) {return res.status(401).send("El nombre de usuario no es válido")}
        if (user.password !== password) {return res.status(401).send("Contraseña incorrecta")}
            const tokenObject = {
                token: await generateSign(user),
                expire: today.add(12, 'hours').format('DD MM YYYY HH:MM:SS')
            }
            res.send({ 
                data: user, tokenObject})
        // const token = jwt.sign({id: user.id, role:user.userType}, process.env.JWT_SECRET)
        // res.status(200).json({data:user, token})
        // }
        // catch{
        // return res.status(500).json({msg:error.message})}
        
        } catch (error) {
            console.log (error)
        }
    
    }
}

module.exports = controllerAuth