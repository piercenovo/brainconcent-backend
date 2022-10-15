const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')

const authRouter = require('./routes/auth.routes')
const userRouter = require('./routes/user.routes')
const gameRouter = require('./routes/game.routes')
const characterRouter = require('./routes/character.routes')

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

// app.get('/', (req, res) => res.send('Bienvenido a la API de Brainconcent'))

// Public Path
const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath))

// Routes
app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/game', gameRouter)
app.use('/character', characterRouter)

// This folder will be Public
app.use(express.static(path.join(__dirname, 'uploads/games')))

module.exports = app
