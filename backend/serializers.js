const bcrypt = require("bcrypt");
const { checkKey } = require("./utils");
const userSerializer = async function (requestBody) {
  checkKey(["username", "password", "role", "email"], requestBody);
  const {email, username, password, role} = requestBody
  const saltRounds = 10;
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
