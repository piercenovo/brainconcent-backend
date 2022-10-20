/*
 path: /story
*/

import { Router } from 'express'
import { createStory, getStories } from '../controllers/story.controller.js'

const router = Router()

router.post('/create-story', createStory)
router.get('/get-stories', getStories)

export default router
