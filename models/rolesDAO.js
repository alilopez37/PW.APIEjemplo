const bd = require('../configMysql')

module.exports = {
    getAllRoles: (callback) => {
        let sql = 'SELECT * FROM roles'
        bd.query(sql,(err, data) => {
            if (err) throw err

            if (data.length > 0)
                callback(data)
            else
                callback(null)
        })
    },
};