/*
 path: /game
*/

import { Router } from 'express'
import { createGame, getAllGames } from '../controllers/game.controller.js'

const router = Router()

router.post('/create-game', createGame)
router.get('/get-games', getAllGames)

export default router
