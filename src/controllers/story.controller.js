const { response } = require('express')
const Story = require('../models/story.model')

const createStory = async (req = require, res = response) => {
  try {
    const { name, image, video } = req.body
    const story = new Story({ name, image, video })

    await story.save()

    res.json({
      resp: true,
      story
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      resp: false,
      message: 'Hable con el administrador'
    })
  }
}

const getStories = async (req = require, res = response) => {
  try {
    const stories = await Story.find()

    res.json({
      resp: true,
      stories
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      resp: false,
      message: 'Hable con el administrador'
    })
  }
}

module.exports = {
  createStory,
  getStories
}
