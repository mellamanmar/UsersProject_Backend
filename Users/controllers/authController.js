const User = require ('../models/users')

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
            const email = req.body.email
            const username = req.body.username
            const password = req.body.password
            const userType = req.body.userType
            await User.create ({
                email : email,
                username : username,
                password : password,
                userType : userType,
            })
            res.json({msg:'Created'})
        } catch (error) {
            return res.status(500).json ({msg:error.message})
            }
    },
}

module.exports = controllerAuth