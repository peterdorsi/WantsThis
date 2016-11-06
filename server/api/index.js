const express = require('express')
const validate = require('express-validation')
const Joi = require('joi')

// const auth = require('../auth')
// const user = require('./user')

const router = express.Router()

// Test...
router.get('/', function (req, res) {
  res.send('hello world')
})

// Auth routes
// router.post('/login', validate({
//     body: {
//         username: Joi.string().required(),
//         password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required()
//     }
// }), user.login)
// router.post('/logout', user.logout)

module.exports = router
