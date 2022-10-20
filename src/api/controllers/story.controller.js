import Story from '../models/story.model.js'
import { response, request } from 'express'

export const createStory = async (req = request, res = response) => {
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

export const getStories = async (req = request, res = response) => {
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
