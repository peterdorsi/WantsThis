const express = require('express')

const api = require('../api')
const config = require('./config')
const DataSanitizer = require('./sanitizer').DataSanitizer

module.exports = function (app) {

  const IsDevMode = app.get('env') === require('./constants').DEVELOPMENT

  // Santize data
  app.use(DataSanitizer)

  // Background Interface
  app.use('/api', require('./paging'), api)

  // If there is a URL prefix, then add some rewrite rules
  let rewriteRules = []
  if (config.portalPrefix !== '/') {
    // Redirect all links to the client side,
    // excluding urls with a dot (.) character (mainly resources)
    rewriteRules.push({
      from: /^\/((?!\.).)+$/,
      to: '/index.html'
    })

    if (IsDevMode) {
      // Redirect all webpack-generated resources
      rewriteRules.push({
        from: /^\/(.)*\..+$/,
        to: function(context) {
          return context.parsedUrl.pathname
        }
      })
    }
  }

  // Other requests back to the front-end processing
  app.use(require('connect-history-api-fallback')({
    verbose: IsDevMode,
    index: '/',
    rewrites: rewriteRules
  }))

  // Development of hot deployment
  if (IsDevMode) {
    require('./compile')(app)
  }

  app.use('/', express.static(config.publicPath))
}
