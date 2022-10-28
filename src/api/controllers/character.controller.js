import Character from '../models/character.model.js'
import { response } from 'express'

export const createCharacter = async (req, res = response) => {
  try {
    const { name, image, colour, ageImage, countryImage, toyImage, detailImage, story } = req.body
    const link = name.replaceAll(' ', '-').toLowerCase()

    const character = new Character({ name: name, image: image, link: link, colour: colour, ageImage: ageImage, countryImage: countryImage, toyImage: toyImage, detailImage: detailImage, story: story })

    await character.save()

    return res.json({
      resp: true,
      message: 'Personaje creado exitosamente'
    })
  } catch (error) {
    return res.status(500).json({
      resp: false,
      message: error.message
    })
  }
}

export const getAllCharacters = async (req, res = response) => {
  try {
    const characters = await Character.find()

    return res.json({
      resp: true,
      message: 'Lista de Personajes',
      characters: characters
    })
  } catch (error) {
    return res.status(500).json({
      resp: false,
      message: error.message
    })
  }
}
