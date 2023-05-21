const fs = require('fs')
const path = require('path')
exports.checkEnvFile = () => {
    const _path = path.resolve(__dirname, '.env')
    return new Promise((resolve, reject) => {
        fs.stat(_path, (error, stats) => {
            if(error){
                return reject(`.env file not detected!!! at path ${_path}`)
            }else{
                return resolve('.env file loaded succesfully....')
            }
        })
    })
}