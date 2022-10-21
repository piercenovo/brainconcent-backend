import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { dbConnection } from './api/database/db.js'
import { notFound, handleError } from './api/middlewares/index.js'

import indexRouter from './api/routes/index.routes.js'
import authRouter from './api/routes/auth.routes.js'
import userRouter from './api/routes/user.routes.js'
import gameRouter from './api/routes/game.routes.js'
import characterRouter from './api/routes/character.routes.js'
import storyRouter from './api/routes/story.routes.js'
import gameDetailRouter from './api/routes/game_detail.routes.js'

// Initialization
dbConnection()
const app = express()

// Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// Routes
app.get('/', indexRouter)
app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/game', gameRouter)
app.use('/character', characterRouter)
app.use('/story', storyRouter)
app.use('/game-detail', gameDetailRouter)

// Handle errors
app.use(notFound)
app.use(handleError)

export default app
