/*
 path: /character
*/

const { Router } = require('express')
const { createCharacter, getCharacters } = require('../controllers/character.controller')

const router = Router()

router.post('/create-character', createCharacter)
router.get('/get-characters', getCharacters)

module.exports = router
