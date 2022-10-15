/*
 path: /story
*/

const { Router } = require('express')
const { createStory, getStories } = require('../controllers/story.controller')

const router = Router()

router.post('/create-story', createStory)
router.get('/get-stories', getStories)

module.exports = router
