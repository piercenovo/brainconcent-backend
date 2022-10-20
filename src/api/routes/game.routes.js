/*
 path: /game
*/

import { Router } from 'express'
import { createGame, getGames } from '../controllers/game.controller.js'

const router = Router()

router.post('/create-game', createGame)
router.get('/get-games', getGames)

export default router
