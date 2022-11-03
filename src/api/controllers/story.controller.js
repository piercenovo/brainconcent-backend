import Story from '../models/story.model.js'
import { response } from 'express'

export const createStory = async (req, res = response) => {
  try {
    const { name, description, image, duration, chapterTitles, chapterDuration, chapterVideos } = req.body
    const story = new Story({ name: name, description: description, image: image, duration: duration, chapterTitles: chapterTitles, chapterDuration: chapterDuration, chapterVideos: chapterVideos })

    await story.save()

    return res.json({
      resp: true,
      message: 'Cuento creado exitosamente'
    })
  } catch (error) {
    return res.status(500).json({
      resp: false,
      message: 'Hable con el administrador'
    })
  }
}

export const getAllStories = async (req, res = response) => {
  try {
    const stories = await Story.find()

    return res.json({
      resp: true,
      message: 'Lista de Cuentos',
      stories: stories
    })
  } catch (error) {
    return res.status(500).json({
      resp: false,
      message: error.message
    })
  }
}
