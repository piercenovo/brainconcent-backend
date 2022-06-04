const { response } = require('express')

const createUser = async (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Crear Usuario'
  })
}

module.exports = {
  createUser
}
