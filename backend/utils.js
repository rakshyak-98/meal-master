const fs = require('fs')
const path = require('path')
exports.checkEnvFile = () => {
    // go to root as resolve is the path to current backedn file, so dirname will resolve to parent of backend dir.
    const _path = path.dirname(path.resolve(__dirname, '.env'))
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

exports.checkKey = (keyList, obj) => {
    keyList.forEach((k1) => {
        if(!(k1 in obj)){
            throw Error(`Object do not have key ${k1}`)
        }
    })
}