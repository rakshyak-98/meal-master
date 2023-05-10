require('dotenv').config()
const {connect} = require('./mongo.config')
const {user, profile} = require('./models/user')

user.create({username:'rakshyak', password: 'rakshyak1998', role: 'expert'})

connect(process.env.MONGO_USERNAME, process.env.MONGO_PASSWORD)