const { user } = require("./models");
const { userSerializer } = require("./serializers");
const {user: client} = require('./models')

const createUser = async (req, res) => {
  const {email, username, password, role} = req.body
  try{
    // TODO: refactor operation in OOPs. 
    console.log('create user')
    console.log({...req.body})
    const serialized = await userSerializer({email, username, password, role})
    const user = await client.create({...serialized})
    await user.save()
    return res.render('index.html', {username, email, role})
  }catch(error) {
    return res.status(400).send({error: error.message})
  }
};
const getUsers = async (req, res) => {
  return res.status(200).send('get request')
};

exports.createUser = createUser;
exports.getUsers = getUsers;
