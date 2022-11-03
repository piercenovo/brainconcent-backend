import Game from '../models/game.model.js'
import { response } from 'express'

export const createGame = async (req, res = response) => {
  try {
    const { name, category, image, description, skillTitles, skillImages } = req.body
    const link = name.replaceAll(' ', '-').toLowerCase()
    const game = new Game({ name: name, category: category, image: image, link: link, description: description, skillTitles: skillTitles, skillImages: skillImages })

    await game.save()

    return res.json({
      resp: true,
      message: 'Juego creado exitosamente'
    })
  } catch (error) {
    return res.status(500).json({
      resp: false,
      message: error.message
    })
  }
}

export const getAllGames = async (req, res = response) => {
  try {
    const games = await Game.find()

    return res.json({
      resp: true,
      message: 'Lista de Juegos',
      games: games
    })
  } catch (error) {
    return res.status(500).json({
      resp: false,
      message: error.message
    })
  }
}
