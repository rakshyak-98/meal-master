const bcrypt = require('bcrypt');
const userSerializer = async function(username, password, role='user'){
    const saltRounds = 10;
    
    // remove the space from front and back.
    username = username.trim()
    password = password.trim()
    
    password = await bcrypt.hash(password, saltRounds)

    const user = new Object({username, password})
    return user
}
exports.userSerializer = userSerializer