const { Schema, model } = require("mongoose");
const uuid = require("uuid");

const schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, rerquired: true },
  role: { type: String, enum: ["expert", "common"], required: true },
});

const profileSchema = new Schema({
  user: { type: Schema.Types.ObjectId, required: true },
  posts: Number,
  created: { type: Date, default: Date.now },
  updateOn: Date,
});

const user = model("user", schema);
const profile = model("profile", profileSchema);

exports.user = user;
exports.profile = profile;
