import { response, request } from 'express'
import User from '../models/user.model.js'
import Game from '../models/game.model.js'
import GameDetail from '../models/game_detail.model.js'

export const getGameDetails = async (req = request, res = response) => {
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

    res.json({
      resp: true,
      gameDetail
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      resp: false,
      message: 'Hable con el administrador'
    })
  }
}

export const getScoreCalculation = async (req = request, res = response) => {
  try {
    const { userId, gameId, time, tap } = req.body

    // const userExits = await User.findById(userId)
    // const gameExits = await Game.findById(gameId)

    const gameDetail = new GameDetail({
      time: time,
      tap: tap,
      gd_user: userId,
      gd_game: gameId
    })

    await gameDetail.save()

    res.json({
      resp: true,
      gameDetail
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      resp: false,
      message: 'Hable con el administrador'
    })
  }
}
