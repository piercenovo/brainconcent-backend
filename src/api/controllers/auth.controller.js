import { response } from 'express'
import bcrypt from 'bcryptjs'
import { generateJWT } from '../helpers/jwt.js'
import User from '../models/user.model.js'

export const login = async (req, res = response) => {
  const { username, password } = req.body

  try {
    const userDB = await User.findOne({ username: username })
    if (!userDB) {
      return res.status(400).json({
        resp: false,
        message: 'Por favor, verifique su nombre de usuario'
      })
    }

    const validPassword = bcrypt.compareSync(password, userDB.password)
    if (!validPassword) {
      return res.status(400).json({
        resp: false,
        message: 'Credenciales incorrectas'
      })
    }

    // Generar el JWT
    const token = await generateJWT(userDB.id)

    return res.json({
      resp: true,
      message: 'Bienvenido a Brainconcent',
      token: token
    })
  } catch (error) {
    return res.status(500).json({
      resp: false,
      message: error.message
    })
  }
}

export const renewLogin = async (req, res = response) => {
  try {
    const uid = req.uid
    const token = await generateJWT(uid)

    return res.json({
      resp: true,
      message: 'Bienvenido a Brainconcent',
      token: token
    })
  } catch (error) {
    return res.status(500).json({
      resp: false,
      message: error.message
    })
  }
}
