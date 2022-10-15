const bcrypt = require('bcryptjs/dist/bcrypt')
const { response } = require('express')
const { generateJWT } = require('../helpers/jwt')
const User = require('../models/user.model')

const createUser = async (req = require, res = response) => {
  const { username, email, password } = req.body

  try {
    const usernameExists = await User.findOne({ username })
    if (usernameExists) {
      return res.status(400).json({
        resp: false,
        message: 'El nombre de usuario ya está registrado'
      })
    }

    const mailExists = await User.findOne({ email })
    if (mailExists) {
      return res.status(400).json({
        resp: false,
        message: 'El correo ya está registrado'
      })
    }

    const user = new User(req.body)

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(password, salt)

    await user.save()

    // Generar mi JWT
    const token = await generateJWT(user.id)

    res.json({
      resp: true,
      user,
      token
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      resp: false,
      message: 'Hable con el administrador'
    })
  }
}

const getUsers = async (req = require, res = response) => {
  try {
    const users = await User.find()

    res.json({
      resp: true,
      users
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
  createUser,
  getUsers
}
