/*
 path: /game-detail
*/

import { Router } from 'express'
import { getGameDetail } from '../controllers/game_detail.controller.js'

const router = Router()

router.post('/get-game-detail', getGameDetail)

export default router
