import { response, request } from 'express'
import User from '../models/user.model.js'
import Game from '../models/game.model.js'
import GameScore from '../models/game_score.model.js'

export const createGameScore = async (req = request, res = response) => {
  const { userId, gameId, time, tap } = req.body

  const gameScore = new GameScore({
    time: time,
    tap: tap,
    userId: userId,
    gameId: gameId
  })

  try {
    const userExits = await User.findById(userId)

    if (!userExits) {
      return res.status(400).json({
        resp: false,
        message: 'Usuario incorrecto o no existente'
      })
    }

    const gameExits = await Game.findById(gameId)
    if (!gameExits) {
      return res.status(400).json({
        resp: false,
        message: 'Juego incorrecto o no existente'
      })
    }
    await gameScore.save()

    return res.json({
      resp: true,
      message: 'Puntuación del juego guardado exitosamente'
    })
  } catch (error) {
    return res.status(500).json({
      resp: false,
      message: error.message
    })
  }
}

export const getAllGameScores = async (req, res = response) => {
  try {
    const gamescores = await GameScore.find()

    return res.json({
      resp: true,
      message: 'Lista de Puntuaciones',
      gamescores: gamescores
    })
  } catch (error) {
    return res.status(500).json({
      resp: false,
      message: error.message
    })
  }
}
