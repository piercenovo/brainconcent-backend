/*
 path: /game
*/

const { Router } = require('express')
const { createGame, getGames } = require('../controllers/game.controllers')

const router = Router()

router.post('/create-game', createGame)
router.get('/get-games', getGames)

module.exports = router
