const { user } = require("./models");
const { userSerializer } = require("./serializers");
const {user: client} = require('./models')
const createUser = async (req, res) => {
  const {username, password, role} = req.body
  try{
    const serialized = await userSerializer(username, password, role)
    console.log(serialized)
    const user = await client.create({...serialized})
    const newClient = await user.save()
    return res.status(200).send({info: newClient})
  }catch(error) {
    console.log(error.message)
    return res.status(400).send({error: error.message})
  }
};
const getUsers = async (req, res) => {
  console.log(req.params)
  return res.status(200).send('get request')
};

exports.createUser = createUser;
exports.getUsers = getUsers;
