const { userSerializer, postSerializer } = require("./serializers");
const { user: client, post } = require("./models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createUser = async (req, res) => {
  try {
    const serialized = await userSerializer(req.body);
    await client.create({ ...serialized });
    const user = client.findOne({ email });
    const token = jwt.sign({ ...user }, process.env.JWT_SECRET);
    return res.status(201).send({ token });
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await client.findOne({ email }, "username email password");
  console.log(user);

  if (!user) return res.status(400).send({ error: "user not found" });

  const isMatch = bcrypt.compareSync(password, user.password);

  if (isMatch) {
    delete user.password;
    const token = jwt.sign(
      { email: user.email, password: user.password, username: user.username },
      process.env.JWT_SECRET
    );
    res.status(200).send({ token: token, isMatch: isMatch });
  } else {
    res.status(400).send({ error: "please check user email or password" });
  }
};

const createPost = (req, res) => {
  try {
    const serialized = postSerializer(req.body);
    post.create();
  } catch (error) {
    console.error(error.message);
  }
  res.status(200).send("success");
};

const getUser = (req, res) => {
  try {
    user = jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.JWT_SECRET
    );
    res.json({ user: user });
  } catch (error) {
    console.error(error.message);
    res.status(400).send({ error: error.message });
  }
};
exports.createPost = createPost;
exports.createUser = createUser;
exports.getUser = getUser;
exports.loginUser = loginUser;
