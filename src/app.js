const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const authRouter = require('./routes/auth.routes')
const userRouter = require('./routes/user.routes')

// Env and DB Config
require('dotenv').config()
require('./database/db').dbConnection()

// App de Express
const app = express()

// Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// Routes
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

module.exports = app
