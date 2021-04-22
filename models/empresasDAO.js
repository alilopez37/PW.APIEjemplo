const bd = require('../configMysql')

module.exports = {
    getAll : (callback) => {
        let sql = 'SELECT * FROM empresa'
        bd.query(sql, (err, data) => {
            if (err) throw err

            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    insert : (empresa, okCallback, failCallback) => {
        let sql = 'INSERT INTO empresa SET ?'
        bd.query(sql, empresa, (err, data) => {
            if (err)
                return failCallback(err)
            else
                return okCallback(data)
        })
    },
    updateLogotipo : (logotipo, idEmpresa,okCallback, failCallback) => {
        let sql = 'UPDATE empresa SET logotipo=? WHERE idEmpresa=?'
        bd.query(sql, [logotipo,idEmpresa], (err, data) => {
            if (err)
                return failCallback(err)
            else
                return okCallback(data)
        })

    }
}