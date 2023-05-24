const { user } = require("./models");
const { userSerializer } = require("./serializers");
const createUser = async (req, res) => {
  const { username, password, role } = req.body;
  const serialized = await userSerializer(username, password, role)
  try{
    const userModel = await user.create({...serialized})
    userModel.save()
    const query = await user.findOne({username: username})
    return res.status(201).send({message: "user created successfully", query})
  }catch(error){
    return res.status(400).send({error: error.message})
  }
};
const getUsers = async (req, res) => {
  res.status(200).send({ user: [] });
};

exports.createUser = createUser;
exports.getUsers = getUsers;
