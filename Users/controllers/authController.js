const User = require ('../models/users')

const controllerUser = {
    test: (req, res) => {
        res.send('Hello world')
    },

    get: async (req, res) => {
        try {
            const email = await controllerUser.find({})
        
        res.json (
            email
        )
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },

    signUp: async (req, res) => {
        try {
            const email = req.body.email
            const password = req.body.password
            const userType = req.body.userType
            await User.create ({
                email : email,
                password : password,
                userType : userType,
            })
            res.json({msg:'Created'})
        } catch (error) {
            return res.status(500).json ({msg:error.message})
            }
    },
}

module.exports = controllerUser