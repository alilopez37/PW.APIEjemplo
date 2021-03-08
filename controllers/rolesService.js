const rolesDAO = require('../models/rolesDAO')

const getAllRoles = (req,res) => {
    rolesDAO.getAllRoles((data) =>{
        try {
            if (!data) throw new Err("Catálogo vacío")

            res.send({
                status: true,
                data: data
            })
        }
        catch(Err) {
            res.send({
                status: false,
                message: 'Catálogo vacío'
            })
        }
    })
};

module.exports = {
    getAllRoles,
}

