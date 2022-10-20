/*
 path: /character
*/

import { Router } from 'express'
import { createCharacter, getCharacters } from '../controllers/character.controller.js'

const router = Router()

router.post('/create-character', createCharacter)
router.get('/get-characters', getCharacters)

export default router
