const { userSerializer } = require("./serializers");
const { user: client } = require("./models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createUser = async (req, res) => {
  const { email, username, password, role } = req.body;
  try {
    const serialized = await userSerializer({
      email,
      username,
      password,
      role,
    });
    const user = await client.create({ ...serialized });
    const token = jwt.sign({ ...user }, process.env.JWT_SECRET);
    return res.status(201).send({ token });
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};
const getUsers = async (req, res) => {
  res.status(200).send("get request");
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await client.findOne({ email });
  console.log(user)

  if(!user) return res.status(400).send({error: "user not found"})
  
  const isMatch = bcrypt.compareSync(password, user.password)

  if(isMatch){
    const token = jwt.sign({...user}, process.env.JWT_SECRET)
    res.status(200).send({token: token, isMatch: isMatch})
  }else{
    res.status(400).send({error: "please check user email or password"})
  }
};
exports.createUser = createUser;
exports.getUsers = getUsers;
exports.loginUser = loginUser;
