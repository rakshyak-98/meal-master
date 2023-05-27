const bcrypt = require('bcrypt');
const userSerializer = async function(obj){

    ["username", "password", "role", "email"].forEach((k1) => {
        if(!(k1 in obj)){
            throw Error(`Object do not have key ${k1}`)
        }
    })

    let {username, password, role, email} = obj

    const saltRounds = 10;
    
    // remove the space from front and back.
    username = username.trim()
    password = password.trim()
    
    password = await bcrypt.hash(password, saltRounds)

    const user = new Object({username, password, email, role})
    return user
}
exports.userSerializer = userSerializer