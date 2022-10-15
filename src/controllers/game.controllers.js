const { response } = require('express')
const Game = require('../models/game.model')

const createGame = async (req = require, res = response) => {
  try {
    const { name, category, image, description, skillsTitles, skillsImages } = req.body
    const link = name.replaceAll(' ', '-').toLowerCase()
    const game = new Game({ name, category, image, link, description, skillsTitles, skillsImages })

    await game.save()

    res.json({
      resp: true,
      game
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      resp: false,
      message: 'Hable con el administrador'
    })
  }
}

const getGames = async (req = require, res = response) => {
  try {
    const games = await Game.find()

    res.json({
      resp: true,
      games
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
  createGame,
  getGames
}
