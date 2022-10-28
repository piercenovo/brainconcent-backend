/*
 path: /story
*/

import { Router } from 'express'
import { createStory, getAllStories } from '../controllers/story.controller.js'

const router = Router()

router.post('/create-story', createStory)
router.get('/get-stories', getAllStories)

export default router
