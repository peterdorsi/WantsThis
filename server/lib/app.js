const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const path = require('path')
const multer = require('multer')
const config = require('./config')

const app = express()

// Setting environment variables
app.set('env', config.env)

// Setting view engine
app.set('views', path.join(config.root, 'views'))
app.set('view engine', 'ejs')

// Enable HTTPS (must be placed after app.use)
app.enable('trust proxy')

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Deal with multipart/form-data
app.use(multer().fields([]))

// Loading route
require('./routes')(app)

// Error Handling
app.use(function(err, req, res, next) { // eslint-disable-line

  let error = {}

  const type = typeof err
  switch (type) {
    case 'number':
      error.status = err
      error.message = "Internal Server Error."
      break
    case 'string':
      error.status = 400
      error.message = err
      break
    default:
      error = err
      error.status = err.status || 500
      error.message = err.message || err.statusTest || "Unknown Error."
  }

  // Print error
  Logger.warn(error.message)

  if(error.status === 500)
    console.error(error.stack || ("Error: ", error))
  error.stack = undefined

  res.status(error.status)
  if (req.xhr || req.headers.accept.indexOf('json') > -1) {
    return res.json(error)
  } else {
    return res.render('error', {error})
  }
})

module.exports = app
