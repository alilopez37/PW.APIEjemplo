const userDAO = require('../models/usersDAO')
const bcrypt = require('bcrypt')

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

const signup = (req, res) => {
    const user = {
        idRol : req.body.idRol,
        nombre : req.body.nombre,
        apellidoPaterno : req.body.apellidoPaterno,
        username : req.body.username,
        password : bcrypt.hashSync(req.body.password,10)
    }

    userDAO.insertUser(user, (data) => {
        console.log('data ==> ',data)
        if (data && data.affectedRows === 1) {
            res.send({
                status: true,
                message: 'Usuario creado exitosamente'
            })
        }
        else {
            res.send({
                status:false,
                message: 'Ha ocurrido un error al crear la cuenta de usuario'
            })
        }
    })
}

module.exports = {
    usernameValidate,
    signup
}















