/*
 path: /game-detail
*/

import { Router } from 'express'
import { getGameDetails } from '../controllers/game_detail.controller.js'

const router = Router()

router.post('/get-game-details', getGameDetails)

export default router
