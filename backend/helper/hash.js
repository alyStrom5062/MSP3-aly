const bcrypt = require('bcrypt')

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (error, salt) => {
            if (error) reject(error)
            bcrypt.hash(password, salt, (error, hash) => {
                if (error) reject(error)
                resolve(hash)
            })
        })
    })
}

const comparePassword = (password, hash) => {
    return bcrypt.compare(password, hash)
}

module.exports = {
    hashPassword,
    comparePassword
}