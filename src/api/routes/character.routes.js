/*
 path: /character
*/

import { Router } from 'express'
import { createCharacter, getAllCharacters } from '../controllers/character.controller.js'

const router = Router()

router.post('/create-character', createCharacter)
router.get('/get-characters', getAllCharacters)

export default router
