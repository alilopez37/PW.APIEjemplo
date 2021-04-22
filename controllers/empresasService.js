const empresaDAO = require('../models/empresasDAO')
const jwt = require('../utils/GenerateJWT')

const getEmpresas = (req, res) => {
    empresaDAO.getAll( (data) =>{
        try {
            if (!data) throw new Err("Error en la consulta")
            console.log(data)
            res.send({
                status: true,
                data: data,
            })
        }
        catch(Err) {
            res.send({
                status: false,
                message: 'Error en la consulta'
            })
        }
    })
}

const create = (req, res) => {

        const empresa = {
            nombre : req.body.nombre,
            direccion : req.body.direccion,
        }
        empresaDAO.insert(empresa, (data) => {
            let status = {
                status: true,
                descripcion: null,
            }

            if (req.files.logotipo){
                const logotipo = req.files.logotipo;
                const fileName = logotipo.name;
                const path = __dirname + '/../public/uploads/' + fileName;

                try {
                    logotipo.mv(path, (error) => {
                        if (error) throw new Error("Problemas al mover el archivo")
                        empresaDAO.updateLogotipo('/uploads/' + fileName, data.insertId,
                        data => {
                            status.descripcion = "Registro almacenado correctamente"
                            res.status(200).send(status);
                        },
                        error => {
                            status.descripcion = "Hubieron problemas al actualizar la ruta dle logotipo"
                            res.status(200).send(status);
                        })
                    })
                } catch (e) {
                    status.descripcion = "Registro almacenado correctamente, pero hubieron problemas al mover el archivo"
                    res.status(500).json(status);
                }
            } else {
                status.descripcion = "Registro almacenado correctamente, sin logotipo"
                res.send(status)
            }


        }, err => {

            res.send({
                status:false,
                descripcion: "Ocurrio un error al almacenar el registro",
                error: err,
            })
        })


}



module.exports = {
    getEmpresas,
    create,
}















