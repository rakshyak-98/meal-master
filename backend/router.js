const express = require('express')
const router = express.Router()
const {createUser, getUsers} = require('./controller')

router.post(`/`,createUser)

router.get('/:id', getUsers)

exports.default = router