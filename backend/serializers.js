const bcrypt = require('bcrypt');
const userSerializer = async function(username, password){
    const saltRounds = 10;
    password = await bcrypt.hash(password, saltRounds)
    const user = new Object({username, password})
    return user
}
exports.userSerializer = userSerializer