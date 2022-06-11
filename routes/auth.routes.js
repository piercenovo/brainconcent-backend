/*
 path: /api/auth
*/

const { Router } = require('express')
const { check } = require('express-validator')
const { loginUser, renewToken } = require('../controllers/auth.controller')
const { validateJWT } = require('../middlewares/validate-jwt')

const router = Router()

router.post('/login', [
  check('email', 'El correo es obligatorio').not().isEmpty(),
  check('password', 'La contraseña es obligatoria').not().isEmpty()
], loginUser)

router.get('/renew', validateJWT, renewToken)

module.exports = router
