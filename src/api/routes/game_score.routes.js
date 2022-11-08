/*
 path: /game-score
*/

import { Router } from 'express'
import { createGameScore, getAllGameScores } from '../controllers/game_score.controller.js'

const router = Router()

router.post('/create-game-score', createGameScore)
router.get('/get-game-scores', getAllGameScores)

export default router
