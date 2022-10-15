const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')

const authRouter = require('./routes/auth.routes')
const userRouter = require('./routes/user.routes')
const gameRouter = require('./routes/game.routes')

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

app.get('/', (req, res) => res.send('Bienvenido al Backend de Brainconcent'))

// Routes
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/game', gameRouter)

// This folder will be Public
app.use(express.static(path.join(__dirname, 'uploads/games')))

module.exports = app
