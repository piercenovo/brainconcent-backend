import Character from '../models/character.model.js'
import { response, request } from 'express'

export const createCharacter = async (req = request, res = response) => {
  try {
    const { name, image, colour, ageImage, countryImage, toyImage, detailImage, story } = req.body
    const link = name.replaceAll(' ', '-').toLowerCase()
    const character = new Character({ name, image, link, colour, ageImage, countryImage, toyImage, detailImage, story })

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

export const getCharacters = async (req = request, res = response) => {
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
