/*
 path: /api/auth
*/

const { Router } = require('express')
const { check } = require('express-validator')
const { login, renewToken } = require('../controllers/auth.controllers')
const { validateJWT } = require('../middlewares/validate-jwt')

const router = Router()

router.post('/login', [
  check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
  check('password', 'La contraseña es obligatoria').not().isEmpty()
], login)

router.get('/renew', validateJWT, renewToken)

module.exports = router
