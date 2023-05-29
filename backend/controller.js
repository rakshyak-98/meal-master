const { userSerializer } = require("./serializers");
const {user: client} = require('./models')
const jwt = require('jsonwebtoken')
const createUser = async (req, res) => {
  const {email, username, password, role} = req.body
  try{
    // TODO: refactor operation in OOPs. 
    console.log('create user')
    console.log({...req.body})
    const serialized = await userSerializer({email, username, password, role})
    const user = await client.create({...serialized})
    const token = jwt.sign({...user}, process.env.JWT_SECRET)
    await user.save()
    return res.status(201).send({token})
  }catch(error) {
    return res.status(400).send({error: error.message})
  }
};
const getUsers = async (req, res) => {
  return res.status(200).send('get request')
};

exports.createUser = createUser;
exports.getUsers = getUsers;
