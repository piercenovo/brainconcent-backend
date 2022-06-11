const bcrypt = require('bcryptjs/dist/bcrypt')
const { request, response } = require('express')
const { generateJWT } = require('../helpers/jwt')
const User = require('../models/user')

const loginUser = async (req = request, res = response) => {
  const { email, password } = req.body

  try {
    const userDB = await User.findOne({ email })
    if (!userDB) {
      return res.status(404).json({
        ok: false,
        msg: 'Email no encontrado'
      })
    }

    // Validar el password
    const validPassword = bcrypt.compareSync(password, userDB.password)
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'La contraseña no es válida'
      })
    }

    // Generar el JWT
    const token = await generateJWT(userDB.id)

    res.json({
      ok: true,
      user: userDB,
      token
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    })
  }
}

const renewToken = async (req, res = response) => {
  // const uid uid del usuario
  const uid = req.uid
  // generar un nuevo JWT, generarJWT... uid...
  const token = await generateJWT(uid)
  // obtener el usuario por el UID, Usuario.findById...
  const user = await User.findById(uid)

  res.json({
    ok: true,
    user,
    token
  })
}

module.exports = {
  loginUser,
  renewToken
}
