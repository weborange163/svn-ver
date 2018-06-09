'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT:'"http://0.0.0.0:8081"',
  API_HOST:'"http://0.0.0.0:8082"'
})
