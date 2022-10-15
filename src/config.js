'use strict'

const assert = require('assert')
const dotenv = require('dotenv')

// read in the .env file
dotenv.config()

// capture the environment variables the application needs
const {
  PORT,
  HOST,
  HOST_URL,
  MONGODB_URI,
  JWT_KEY
} = process.env

// validate the required configuration information
assert(PORT, 'PORT configuration is required.')
assert(HOST, 'HOST configuration is required.')
assert(HOST_URL, 'HOST_URL configuration is required.')
assert(MONGODB_URI, 'MONGODB_URI configuration is required.')
assert(JWT_KEY, 'JWT_KEY configuration is required.')

// export the configuration information
module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  mongodb: MONGODB_URI,
  jwt: JWT_KEY
}
