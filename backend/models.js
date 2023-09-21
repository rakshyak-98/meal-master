const { Schema, model } = require('mongoose')
const uuid = require('uuid')

const userSchema = new Schema({
  username: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, rerquired: true },
  role: { type: String, required: false }
})

const profileSchema = new Schema({
  user: { type: Schema.Types.ObjectId, required: true },
  posts: Number,
  created: { type: Date, default: Date.now },
  updateOn: Date
})

const postSchema = new Schema({
  user: { type: String, required: true },
  title: {
    type: String,
    required: true
  },
  description: { type: String }
})

const user = model('User', userSchema)
const post = model('Post', postSchema)

exports.user = user
exports.post = post
