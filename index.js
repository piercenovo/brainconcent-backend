const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const authRouter = require('./routes/auth.routes')
const userRouter = require('./routes/user.routes')

// Env Config
require('dotenv').config()

// DB Config
require('./database/db').dbConnection()

// App de Express
const app = express()

app.use(morgan('dev'))

// Lectura y parseo del Body
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)

const port = process.env.PORT || 6000
// Servidor Corriendo
app.listen(port, () => console.log(`Server running on port ${port}`))
