const bcrypt = require('bcryptjs/dist/bcrypt')
const User = require('../models/user.model')
const { request, response } = require('express')
const { generateJWT } = require('../helpers/jwt')

const login = async (req = request, res = response) => {
  const { username, password } = req.body

  try {
    const userDB = await User.findOne({ username })
    if (!userDB) {
      return res.status(404).json({
        resp: false,
        message: 'Nombre de usuario no encontrado'
      })
    }

    // Validar el password
    const validPassword = bcrypt.compareSync(password, userDB.password)
    if (!validPassword) {
      return res.status(400).json({
        resp: false,
        message: 'La contraseña no es válida'
      })
    }

    // Generar el JWT
    const token = await generateJWT(userDB.id)

    res.json({
      resp: true,
      user: userDB,
      token
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      resp: false,
      message: 'Hable con el administrador'
    })
  }
}

const renewToken = async (req = request, res = response) => {
  // const uid uid del usuario
  const uid = req.uid
  // generar un nuevo JWT, generarJWT... uid...
  const token = await generateJWT(uid)
  // obtener el usuario por el UID, Usuario.findById...
  const user = await User.findById(uid)

  res.json({
    resp: true,
    user,
    token
  })
}

module.exports = {
  login,
  renewToken
}