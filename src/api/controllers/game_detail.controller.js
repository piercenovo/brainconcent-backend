import { response, request } from 'express'
import User from '../models/user.model.js'
import Game from '../models/game.model.js'
import GameDetail from '../models/game_detail.model.js'

export const getGameDetails = async (req = request, res = response) => {
  try {
    const { user_id, game_id, time, tap } = req.body
    const game_score = time * tap / 100
    const userExits = await User.findById( user_id )
    const gameExits = await Game.findById( game_id )

    const gameDetail = new GameDetail({
      time: time, 
      tap: tap,
      gd_user: user_id,
      gd_game: game_id,
      score: game_score
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

export const getScoreCalculation = async (req = request, res = response) => {
  try {
    const { user_id, game_id, time, tap } = req.body
    
    const userExits = await User.findById( user_id )
    const gameExits = await Game.findById( game_id )

    const gameDetail = new GameDetail({
      time: time, 
      tap: tap,
      gd_user: user_id,
      gd_game: game_id,
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

