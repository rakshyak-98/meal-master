const { user } = require("./models");
const { userSerializer } = require("./serializers");
const createUser = async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  userSerializer(username, password)
    .then((user) => res.status(200).send(user))
    .catch((error) => res.status(400).send(error.message));
};
const getUsers = async (req, res) => {
  res.status(200).send({ user: [] });
};

exports.createUser = createUser;
exports.getUsers = getUsers;
