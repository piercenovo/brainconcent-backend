import { response, request } from 'express'
import User from '../models/user.model.js'
import Game from '../models/game.model.js'
import GameDetail from '../models/game_detail.model.js'

export const getGameDetail = async (req = request, res = response) => {
  const { userId, gameId, time, tap } = req.body

  const gameScore = time * tap / 100

  const gameDetail = new GameDetail({
    time: time,
    tap: tap,
    gd_user: userId,
    gd_game: gameId,
    score: gameScore
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
    await gameDetail.save()

    return res.json({
      resp: true,
      gameDetail: gameDetail
    })
  } catch (error) {
    return res.status(500).json({
      resp: false,
      message: error.message
    })
  }
}

export const getScoreCalculation = async (req = request, res = response) => {
  const { userId, gameId, time, tap } = req.body

  const gameDetail = new GameDetail({
    time: time,
    tap: tap,
    gd_user: userId,
    gd_game: gameId
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
    await gameDetail.save()

    return res.json({
      resp: true,
      gameDetail: gameDetail
    })
  } catch (error) {
    return res.status(500).json({
      resp: false,
      message: error.message
    })
  }
}
