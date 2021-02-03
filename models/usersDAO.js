const bd = require('../configMysql')

module.exports = {
    findByUsername : (username, callback) => {
        let sql = 'SELECT * FROM user WHERE username=?'
        bd.query(sql,username, (err, data) => {
            if (err) throw err

            if (data.length>0)
                callback(data[0])
            else
                callback(null)
        })
    },
    getAllUsers : (callback) => {

    },
    insertUser : (user, callback) => {
        let sql = 'INSERT INTO user SET ?'
        bd.query(sql, user, (err, data) => {
            if (err)
                return callback(null)
            else
                return callback(data)
        })
    }
}