const userDAO = require('../models/usersDAO')

const usernameValidate = (req, res) => {
    userDAO.findByUsername(req.params.username, (data) =>{

        try {
            if (!data) throw new Err("Usuario disponible")

            res.send({
                status: true,
                message: 'Usuario ocupado'
            })
        }
        catch(Err) {
            res.send({
                status: false,
                message: 'Usuario disponible'
            })
        }
    })
}

module.exports = {
    usernameValidate
}