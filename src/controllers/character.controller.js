const { response } = require('express')
const Character = require('../models/character.model')

const createCharacter = async (req = require, res = response) => {
  try {
    const { name, image, color, ageImage, toyImage, detailImage, story } = req.body
    const link = name.replaceAll(' ', '-').toLowerCase()
    const character = new Character({ name, image, link, color, ageImage, toyImage, detailImage, story })

    await character.save()

    res.json({
      resp: true,
      character
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      resp: false,
      message: 'Hable con el administrador'
    })
  }
}

const getCharacters = async (req = require, res = response) => {
  try {
    const characters = await Character.find()

    res.json({
      resp: true,
      characters
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
  createCharacter,
  getCharacters
}
