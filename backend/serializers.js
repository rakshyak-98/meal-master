const bcrypt = require("bcrypt");
const { checkKey } = require("./utils");
const userSerializer = async function (obj) {
  checkKey(["username", "password", "role", "email"], obj);

  let { username, password, role, email } = obj;

  const saltRounds = 10;

  // remove the space from front and back.
  username = username.trim();
  password = password.trim();

  password = await bcrypt.hash(password, saltRounds);

  const user = new Object({ username, password, email, role });
  return user;
};

const postSerializer = async function (obj) {
  checkKey(["user", "title", "description"], obj);
};

exports.userSerializer = userSerializer;
exports.postSerializer = postSerializer;
