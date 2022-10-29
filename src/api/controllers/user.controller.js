import { response, request } from 'express'
import bcrypt from 'bcryptjs'
import { generateJWT } from '../helpers/jwt.js'
import User from '../models/user.model.js'
import { sendEmailVerify } from '../middlewares/nodemail.js'
import { emailTemplate, randomNumber } from '../helpers/email.template.js'

export const createUser = async (req = request, res = response) => {
  const { name, username, email, password } = req.body

  try {
    const usernameExists = await User.findOne({ username: username })
    if (usernameExists) {
      return res.status(400).json({
        resp: false,
        message: 'El nombre de usuario ya está registrado'
      })
    }

    const mailExists = await User.findOne({ email: email })
    if (mailExists) {
      return res.status(400).json({
        resp: false,
        message: 'El correo ya está registrado'
      })
    }

    // const randomNumber = Math.floor(10000 + Math.random() * 90000)

    const user = new User({ name: name, username: username, email: email, password: password, temp: randomNumber })

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(password, salt)

    await sendEmailVerify(`Código de verificación de ${name}`, email, emailTemplate)

    await user.save()

    // Generar mi JWT
    const token = await generateJWT(user.id)

    return res.json({
      resp: true,
      message: 'Usuario creado exitosamente',
      token: token
    })
  } catch (error) {
    return res.status(500).json({
      resp: false,
      message: error.message
    })
  }
}

export const getAllUsers = async (req = request, res = response) => {
  try {
    const users = await User.find()

    return res.json({
      resp: true,
      message: 'Lista de Usuarios',
      users: users
    })
  } catch (error) {
    return res.status(500).json({
      resp: false,
      message: error.message
    })
  }
}

export const getUserById = async (req, res = response) => {
  const uid = req.uid

  try {
    const user = await User.findById(uid)

    return res.json({
      resp: true,
      message: 'Usuario por ID',
      user: user
    })
  } catch (error) {
    return res.status(500).json({
      resp: false,
      message: error.message
    })
  }
}
